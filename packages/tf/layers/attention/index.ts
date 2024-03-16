import { Layer } from "../base";
import { args } from "./attention.config";

export const attention = ({ id }: { id: string }) =>
  new Layer({
    name: "Attention", // to be shown on our UI
    nameTf: "Attention", // name avaialable in tensorflow
    args,
    isMultipleAllowed: true,
  });
