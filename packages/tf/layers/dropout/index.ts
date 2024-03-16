import { Layer } from "../base";
import { args } from "./dropout.config";

export const dropout = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Dropout", // to be shown on our UI
    nameTf: "Dropout", // name avaialable in tensorflow
    args,
  });
