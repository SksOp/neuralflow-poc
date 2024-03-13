"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  MiniMap,
  NodeChange,
  OnConnect,
  ReactFlowInstance,
  addEdge,
  useEdgesState,
  useNodesState,
  useOnSelectionChange,
} from "reactflow";

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
import { topologicalSort } from "@/lib/topologicalSort";
import { generateCodeCallback } from "@/lib/nodeToCode";
import { Node } from "reactflow";
import { cloneDeep } from "lodash";
import { Layer, Model } from "@/packages/tf";

const nodeTypes = {
  custom: CustomNode,
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Layer>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  // const [selectedNode, setSelectedNode] = useState<Node<Layer>>();
  const [selectedEdge, setSelectedEdge] = useState({});
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
      if ((event.ctrlKey || event.metaKey) && event.key === "c") {
        event.preventDefault();
        copyNode();
      }
      if ((event.ctrlKey || event.metaKey) && event.key === "v") {
        event.preventDefault();
        pasteNode();
      }
      if (event.key === "Delete") {
        event.preventDefault();
        onNodesDelete();
        onEdgeDelete();
      }
      if ((event.ctrlKey || event.metaKey) && event.key === "x") {
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
    const model = Model.of({ layers }).compile();
    console.log(model);
  }, [edges, nodes]);

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
        onInit={setReactFlowInstance}
        // onNodeDragStart={(_, node) => setSelectedNode(node)}
        fitView
        nodeTypes={nodeTypes}
      >
        <MiniMap position="bottom-left" nodeStrokeWidth={3} />
      </ReactFlow>
      <Button
        onClick={() => generateCode()}
        className="h-[70px] w-[70px] absolute bottom-10 right-10 bg-orange-400 rounded-full text-black hover:text-white"
      >
        <Zap />
      </Button>
    </LayoutMain>
  );
}
