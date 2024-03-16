import { Layer, Model, ModelInstance } from "@/packages/tf";
import { Edge, Node } from "reactflow";

export const saveModel = (edges: Edge[], nodes: Node<Layer>[]) => {
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
    targetNode.data.meta.inputNodesIds.add(sourceNode.data.meta.id);
  });
  const layers = nodes.map((node) => {
    console.log(node);
    node.data.meta.position = node.position;
    return node.data;
  });
  // save to local storage
  try {
    const model = Model.of({ layers });
    const modelInstance = model.save();
    console.log(modelInstance);
    localStorage.setItem("model", JSON.stringify(modelInstance));
  } catch (err: any) {
    return err.message;
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
  return {
    err: false,
    message: "Saved Model found in local storage",
    model,
  };
};
