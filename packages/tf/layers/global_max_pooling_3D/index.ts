import { Layer } from "../base";
import { args } from "./global_max_pool_3d.config";

export const global_max_pool_3d = ({ id }: { id: string }) =>
  new Layer({
    name: "Gloabal Max Pooling 3D", // to be shown on our UI
    nameTf: "GlobalMaxPooling3D", // name avaialable in tensorflow
    args,
  });
