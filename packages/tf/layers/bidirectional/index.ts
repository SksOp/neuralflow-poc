import { Layer } from "../base";
import { args } from "./bidirectional.config";

export const bidirectional = () =>
  new Layer({
    name: "Bidirectional", // to be shown on our UI
    nameTf: "Bidirectional", // name avaialable in tensorflow
    args,
  });
