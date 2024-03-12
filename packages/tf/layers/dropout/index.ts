import { Layer } from "../base";
import { args } from "./dropout.config";

export const dropout = () =>
  new Layer({
    name: "Dropout", // to be shown on our UI
    nameTf: "Dropout", // name avaialable in tensorflow
    args,
  });
