import { Layer } from "../base";
import { args } from "./softmax.config";

export const softmax = () =>
  new Layer({
    name: "Softmax", // to be shown on our UI
    nameTf: "Softmax", // name avaialable in tensorflow
    args,
  });
