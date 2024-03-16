import { Layer } from "../base";
import { args } from "./global_max_pool_2d.config";

export const global_max_pool_2d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Gloabal Max Pooling 2D", // to be shown on our UI
    nameTf: "GlobalMaxPooling2D", // name avaialable in tensorflow
    args,
  });
