import { Layer } from "../base";
import { args } from "./activation.config";

export const activation = () =>
  new Layer({
    name: "Activation", // to be shown on our UI
    nameTf: "Activation", // name avaialable in tensorflow
    args,
  });
