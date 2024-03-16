import { Layer } from "../base";
import { args } from "./conv_3d.config";

export const conv_3d = () =>
  new Layer({
    name: "Conv 3D", // to be shown on our UI
    nameTf: "Conv3D", // name avaialable in tensorflow
    args,
  });
