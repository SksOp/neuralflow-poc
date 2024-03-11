import { Layer } from "../base";
import { args } from "./maxpool_2d.config";

export const maxpool_2d = () =>
  new Layer({
    name: "Max Pooling         2D", // to be shown on our UI
    nameTf: "Maxpool2D", // name avaialable in tensorflow
    args,
  });
