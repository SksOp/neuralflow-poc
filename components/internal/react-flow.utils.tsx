"use cleint";
import { Layer, Model, ModelInstance } from "@/packages/tf";
import React, { useEffect } from "react";
import { Edge, Node } from "reactflow";
import { useToast } from "../ui/use-toast";

export const saveModel = (edges: Edge[], nodes: Node<Layer>[]) => {
  if (nodes.length === 0) {
    localStorage.removeItem("model");
    return { success: true, message: "Cleared Local storage" };
  }

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
    targetNode.data.meta.inputNodesIds.add(sourceNode.data.meta.id);
  });
  const layers = nodes.map((node) => {
    node.data.meta.position = node.position;
    node.data.setId(node.id);
    return node.data;
  });
  // save to local storage
  try {
    const model = Model.of({ layers });
    const modelInstance = Model.save(model);
    localStorage.setItem("model", JSON.stringify(modelInstance));
    return { success: true, message: "Saved to local storage" };
  } catch (err: any) {
    return { success: false, message: err.message };
  }
};

export const loadModelInstanceFromLocalStorage = (): {
  err: boolean;
  message: string;
  model: ModelInstance | null;
} => {
  const m = localStorage.getItem("model");
  if (!m) {
    return {
      err: true,
      message: "No model found in local storage",
      model: null,
    };
  }
  const model = JSON.parse(m);
  if (model.version !== process.env.NEXT_PUBLIC_MODEL_VERSION)
    return {
      err: true,
      message: "Model version mismatch with the locally saved model",
      model: null,
    };
  console.log({ model });
  return {
    err: false,
    message: "Saved Model found in local storage",
    model,
  };
};

export function useLocalStorageModel() {
  const { toast } = useToast();
  const [nodes, setNodes] = React.useState<Node<Layer>[]>([]);
  const [edges, setEdges] = React.useState<Edge[]>([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    // localStorage.clear("model");
    const localData = loadModelInstanceFromLocalStorage();

    toast({
      duration: 3000,
      title: localData?.err ? "Alert" : "Success",
      description: localData?.message,
    });

    if (!localData.model) {
      setLoading(false);
      return;
    }
    const nodesSet: Set<Node<Layer>> = new Set();
    const edgesSet: Set<Edge> = new Set();
    localData.model.layers.forEach((l) => {
      const layer = Layer.load(l);
      const node: Node<Layer> = {
        id: layer.meta.id,
        position: layer.meta.position,
        type: "custom",
        data: layer,
      };
      nodesSet.add(node);
      const inputNodes = layer.meta.inputNodesIds;
      inputNodes.forEach((inputNodeId) => {
        const edge: Edge = {
          id: `${layer.meta.id}-${inputNodeId}`,
          source: inputNodeId,
          sourceHandle: "b",
          targetHandle: "a",
          target: layer.meta.id,
        };
        edgesSet.add(edge);
      });
    });
    setNodes(Array.from(nodesSet));
    setEdges(Array.from(edgesSet));
    setLoading(false);
  }, [toast]);
  return {
    nodes,
    edges,
    loading,
  };
}
