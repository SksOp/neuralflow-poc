import { Layer } from "../base";
import { args } from "./average_pool_1d.config";

export const average_pool_1d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Average Pooling 1D", // to be shown on our UI
    nameTf: "AveragePooling1D", // name avaialable in tensorflow
    args,
  });
