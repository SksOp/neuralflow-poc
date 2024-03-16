import { Layer } from "../base";
import { args } from "./average.config";

export const average = () =>
  new Layer({
    name: "Average", // to be shown on our UI
    nameTf: "Average", // name avaialable in tensorflow
    args,
    isMultipleAllowed: true,
  });
