import { Layer } from "../base";
import { args } from "./dense.config";

export const dense = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Dense", // to be shown on our UI
    nameTf: "Dense", // name avaialable in tensorflow
    args,
  });
