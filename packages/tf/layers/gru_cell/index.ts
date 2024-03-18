import { Layer } from "../base";
import { args } from "./gru_cell.config";

export const gru_cell = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "GRU Cell", // to be shown on our UI
    nameTf: "GRUCell", // name avaialable in tensorflow
    args,
  });
