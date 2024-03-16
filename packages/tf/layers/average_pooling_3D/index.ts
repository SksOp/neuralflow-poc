import { Layer } from "../base";
import { args } from "./average_pool_3d.config";

export const average_pool_3d = ({ id }: { id: string }) =>
  new Layer({
    name: "Average Pooling 3D", // to be shown on our UI
    nameTf: "AveragePooling3D", // name avaialable in tensorflow
    args,
  });
