import { Layer } from "../base";
import { args } from "./hashing.config";

export const hashing = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Hashing", // to be shown on our UI
    nameTf: "Hashing", // name avaialable in tensorflow
    args,
  });
