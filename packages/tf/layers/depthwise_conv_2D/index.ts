import { Layer } from "../base";
import { args } from "./depthwise_conv_2d.config";

export const depthwise_conv_2d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Depthwise Conv 2D", // to be shown on our UI
    nameTf: "DepthwiseConv2D", // name avaialable in tensorflow
    args,
  });
