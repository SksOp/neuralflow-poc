"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  MiniMap,
  NodeChange,
  OnConnect,
  ReactFlowInstance,
  addEdge,
  useEdgesState,
  useNodesState,
  useOnSelectionChange,
} from "reactflow";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import "reactflow/dist/style.css";

import CustomNode from "@/components/internal/CustomNode";
import {
  initialEdges,
  initialNodes,
} from "@/components/internal/initial-elements";
import { LayoutMain } from "@/components/layout-main";
import { Sidebar } from "@/components/internal/Sidebar";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Node } from "reactflow";
import { cloneDeep } from "lodash";
import { Layer, Model } from "@/packages/tf";
import { useToast } from "@/components/ui/use-toast";
import { cn, downloadStringAsFile } from "@/lib/utils";
import { Code } from "@/components/ui/code";
import { CopyToClipboard } from "@/components/copy-to-clipboard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const nodeTypes = {
  custom: CustomNode,
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Layer>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const { toast } = useToast();
  // const [selectedNode, setSelectedNode] = useState<Node<Layer>>();
  const [code, setCode] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [copiedNode, setCopiedNode] = useState<Node<Layer>>();
  // Copy node logic
  const getSelectedNode = useCallback((nodes: Node<Layer>[]) => {
    return nodes.find((node) => node.selected);
  }, []);

  const copyNode = useCallback(() => {
    const selectedNode = getSelectedNode(nodes);
    if (selectedNode) {
      const deepCopiedNode = cloneDeep(selectedNode);
      deepCopiedNode.data.input_nodes.clear();
      setCopiedNode(deepCopiedNode);
    }
  }, [getSelectedNode, nodes]);

  const onEdgeDelete = useCallback(() => {
    const selectedEdge = edges.find((edge) => edge.selected);
    if (!selectedEdge) return;

    onEdgesChange([
      {
        id: selectedEdge.id,
        type: "remove",
      },
    ]);
  }, [edges, onEdgesChange]);

  const onNodesDelete = useCallback(() => {
    const selectedNode = getSelectedNode(nodes);
    if (!selectedNode) return;
    onNodesChange([
      {
        id: selectedNode.id,
        type: "remove",
      },
    ]);
    const edgesChanged = edges.filter(
      (e) => e.target === selectedNode.id || e.source === selectedNode.id,
    );
    onEdgesChange(
      edgesChanged.map((e) => {
        return { id: e.id, type: "remove" };
      }),
    );
  }, [edges, getSelectedNode, nodes, onEdgesChange, onNodesChange]);

  const pasteNode = useCallback(() => {
    if (!copiedNode || Object.keys(copiedNode).length === 0) return;

    // Generate a new ID for the copied node
    const newNodeId = `node_${Math.random().toString(36).slice(2, 9)}`;
    const positionX = copiedNode.position.x + 20;
    const positionY = copiedNode.position.y + 20;
    copiedNode.data.setId(newNodeId);

    const newNode = {
      ...copiedNode,
      id: newNodeId,
      selected: false,
      position: {
        ...copiedNode.position,
        x: positionX + 50, // Offset position for visibility
        y: positionY + 50,
      },
    };

    setNodes((nds) => nds.concat(newNode));
  }, [copiedNode, setNodes]);

  const onConnect: OnConnect = useCallback(
    (connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        ((event.ctrlKey || event.metaKey) && event.key === "c") ||
        event.key === "C"
      ) {
        event.preventDefault();
        copyNode();
      }
      if (
        ((event.ctrlKey || event.metaKey) && event.key === "v") ||
        event.key === "V"
      ) {
        event.preventDefault();
        pasteNode();
      }
      if (event.key === "Delete") {
        event.preventDefault();
        onNodesDelete();
        onEdgeDelete();
      }
      if (
        ((event.ctrlKey || event.metaKey) && event.key === "x") ||
        event.key === "X"
      ) {
        event.preventDefault();
        copyNode();
        onNodesDelete();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [copyNode, onEdgeDelete, onNodesDelete, pasteNode]);

  const generateCode = useCallback(() => {
    //iterate through nodes array and fill inputNodes[]
    edges.forEach((edge) => {
      const sourceNode = nodes.find((node) => {
        return node.id === edge.source;
      });
      const targetNode = nodes.find((node) => {
        return node.id === edge.target;
      });
      if (!targetNode || !sourceNode) {
        alert("no selected");
        return;
      }
      targetNode.data.input_nodes.add(sourceNode.data);
    });
    const layers = nodes.map((node) => node.data);
    try {
      const model = Model.of({ layers }).compile();
      setCode(model); //.replace(/(^[ \t]*\n)/gm, "") not needed for now
    } catch (err: any) {
      console.log(err);
      setIsDialogOpen(false);
      toast({
        duration: 100000,
        className: cn(
          "top-10 right-0 flex fixed md:max-w-[420px] md:top-20 md:right-8",
        ),
        title: "Error",
        description: err.message,
      });
    }
  }, [edges, nodes, toast]);

  // console.log(nodes);

  return (
    <LayoutMain>
      <Sidebar reactFlowInstance={reactFlowInstance} setNodes={setNodes} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        // onNodesDelete={}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={(v: any) => {
          toast({
            duration: 100000,
            className: cn(
              "top-10 right-0 flex fixed md:max-w-[420px] md:top-20 md:right-8",
            ),
            title: "Alert: We are still in Beta",
            description:
              "Our platform is in the beta phase and might occasionally encounter errors. Please feel free to report any bugs via our issue tracker.",
          });
          return setReactFlowInstance(v);
        }}
        // onNodeDragStart={(_, node) => setSelectedNode(node)}
        fitView
        nodeTypes={nodeTypes}
      >
        <Background color="#F0F0F0" variant={BackgroundVariant.Lines} />
        <MiniMap position="bottom-left" nodeStrokeWidth={3} />
      </ReactFlow>
      <AlertDialog open={isDialogOpen}>
        <AlertDialogTrigger
          onClick={() => {
            setIsDialogOpen(true);
            generateCode();
          }}
          className="h-[70px] flex items-center justify-center w-[70px] absolute bottom-10 right-10 bg-orange-400 rounded-full text-black hover:text-white"
        >
          <Zap />
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-xl max-h-xl py-5 px-3">
          <ScrollArea className="w-xl h-xl rounded-md border p-4">
            <Code code={`\`\`\`py \n${code}`} />
            <ScrollBar orientation="horizontal" />
            <ScrollBar orientation="vertical" />
          </ScrollArea>
          <AlertDialogFooter>
            <CopyToClipboard content={code} />
            <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </LayoutMain>
  );
}
