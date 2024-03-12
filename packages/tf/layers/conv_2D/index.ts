import { Layer } from "../base";
import { args } from "./conv_2d.config";

export const conv_2d = () =>
  new Layer({
    name: "Conv 2D", // to be shown on our UI
    nameTf: "Conv2D", // name avaialable in tensorflow
    args,
  });
