import { Layer } from "../base";
import { args } from "./flatten.config";

export const flatten = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Flatten", // to be shown on our UI
    nameTf: "Flatten", // name avaialable in tensorflow
    args,
  });
