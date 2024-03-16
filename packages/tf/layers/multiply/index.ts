import { Layer } from "../base";
import { args } from "./multiply.config";

export const multiply = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Multiply", // to be shown on our UI
    nameTf: "Multiply", // name avaialable in tensorflow
    args,
    isMultipleAllowed: true,
  });
