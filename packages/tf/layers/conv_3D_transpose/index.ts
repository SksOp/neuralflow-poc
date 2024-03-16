import { Layer } from "../base";
import { args } from "./conv_3d_transpose.config";

export const conv_3d_transpose = () =>
  new Layer({
    name: "Conv 3D Transpose", // to be shown on our UI
    nameTf: "Conv3DTranspose", // name avaialable in tensorflow
    args,
  });
