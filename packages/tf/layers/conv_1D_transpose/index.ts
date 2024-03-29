import { Layer } from "../base";
import { args } from "./conv_1d_transpose.config";

export const conv_1d_transpose = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Conv 1D Transpose", // to be shown on our UI
    nameTf: "Conv1DTranspose", // name avaialable in tensorflow
    args,
  });
