import { Layer } from "../base";
import { args } from "./add.config";

export const add = ({ id }: { id: string }) =>
  new Layer({
    name: "Add", // to be shown on our UI
    nameTf: "Add", // name avaialable in tensorflow
    args,
    isMultipleAllowed: true,
    maxMultiple: 3,
  });
