import { Layer } from "../base";
import { args } from "./average_pool_2d.config";

export const average_pool_2d = ({ id }: { id: string }) =>
  new Layer({
    name: "Average Pooling 2D", // to be shown on our UI
    nameTf: "AveragePooling2D", // name avaialable in tensorflow
    args,
  });
