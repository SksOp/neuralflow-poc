import { Layer } from "../base";
import { args } from "./abstract_RNN_cell.config";

export const abstract_RNN_cell = () =>
  new Layer({
    name: "Abstract RNN Cell", // to be shown on our UI
    nameTf: "AbstractRNNCell", // name avaialable in tensorflow
    args,
  });
