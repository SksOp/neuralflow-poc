import { Layer } from "../base";
import { args } from "./conv_1d.config";

export const conv_1d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Conv 1D", // to be shown on our UI
    nameTf: "Conv1D", // name avaialable in tensorflow
    args,
  });
