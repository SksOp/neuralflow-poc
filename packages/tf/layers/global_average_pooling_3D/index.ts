import { Layer } from "../base";
import { args } from "./global_average_pool_3d.config";

export const global_average_pool_3d = ({ id }: { id: string }) =>
  new Layer({
    name: "Gloabal Average Pooling 3D", // to be shown on our UI
    nameTf: "GlobalAveragePooling3D", // name avaialable in tensorflow
    args,
  });
