import { Layer } from "../base";
import { args } from "./depthwise_conv_1d.config";

export const depthwise_conv_1d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Depthwise Conv 1D", // to be shown on our UI
    nameTf: "DepthwiseConv1D", // name avaialable in tensorflow
    args,
  });
