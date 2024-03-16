import { Layer } from "../base";
import { args } from "./activation.config";

export const activation = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Activation", // to be shown on our UI
    nameTf: "Activation", // name avaialable in tensorflow
    args,
  });
