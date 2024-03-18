import { Layer } from "../base";
import { args } from "./einsum_dense.config";

export const einsum_dense = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Einsum Dense", // to be shown on our UI
    nameTf: "EinsumDense", // name avaialable in tensorflow
    args,
  });
