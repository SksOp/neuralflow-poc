import { Layer } from "../base";
import { args } from "./flatten.config";

export const flatten = () =>
  new Layer({
    name: "Flatten", // to be shown on our UI
    nameTf: "Flatten", // name avaialable in tensorflow
    args,
  });
