import { Layer } from "../base";
import { args } from "./multiply.config";

export const multiply = () =>
  new Layer({
    name: "Multiply", // to be shown on our UI
    nameTf: "Multiply", // name avaialable in tensorflow
    args,
    isMultipleAllowed: true,
  });
