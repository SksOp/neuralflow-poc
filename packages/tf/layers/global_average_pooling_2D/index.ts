import { Layer } from "../base";
import { args } from "./global_average_pool_2d.config";

export const global_average_pool_2d = () =>
  new Layer({
    name: "Gloabal Average Pooling 2D", // to be shown on our UI
    nameTf: "GlobalAveragePooling2D", // name avaialable in tensorflow
    args,
  });
