import { Layer } from "../base";
import { args } from "./conv_2d_transpose.config";

export const conv_2d_transpose = () =>
  new Layer({
    name: "Conv 2D Transpose", // to be shown on our UI
    nameTf: "Conv2DTranspose", // name avaialable in tensorflow
    args,
  });
