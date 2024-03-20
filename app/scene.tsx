"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Edge,
  MiniMap,
  OnConnect,
  ReactFlowInstance,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";

import CustomNode from "@/components/internal/CustomNode";
import { Sidebar } from "@/components/internal/Sidebar";
import { Node } from "reactflow";
import { cloneDeep } from "lodash";
import { Layer, Model } from "@/packages/tf";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Warning } from "@/components/ui/warning";
import { David_Libre } from "next/font/google";

const nodeTypes = {
  custom: CustomNode,
};

export default function Home({
  initialNodes,
  initialEdges,
}: {
  initialNodes: Node<Layer>[];
  initialEdges: Edge[];
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState<Layer>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const { toast } = useToast();

  const [copiedNode, setCopiedNode] = useState<Node<Layer>>();
  const getSelectedNode = useCallback((nodes: Node<Layer>[]) => {
    return nodes.find((node) => node.selected);
  }, []);

  const copyNode = useCallback(
    () => setCopiedNode(getSelectedNode(nodes)),
    [getSelectedNode, nodes],
  );

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
    const newCopiedNode = cloneDeep(copiedNode);
    // Use both current timestamp and a random number for the ID
    const newNodeId = `node_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
    const positionX =
      newCopiedNode.position.x + Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    const positionY =
      newCopiedNode.position.y + Math.floor(Math.random() * (40 - 20 + 1)) + 20;

    newCopiedNode.data.meta.id = newNodeId;

    const newNode = {
      ...newCopiedNode,
      id: newNodeId,
      selected: false,
      position: {
        ...newCopiedNode.position,
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
  // console.log(nodes.map((n) => n.id));
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

  return (
    <>
      <Warning isClosed={isClosed} setIsClosed={setIsClosed} />
      <Sidebar
        reactFlowInstance={reactFlowInstance}
        setNodes={setNodes}
        nodes={nodes}
        edges={edges}
      />
      <ReactFlow
        className={cn("flex", isClosed ? "flex" : "")}
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        // onNodesDelete={}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={(v: any) => {
          toast({
            duration: 5000,
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
    </>
  );
}
