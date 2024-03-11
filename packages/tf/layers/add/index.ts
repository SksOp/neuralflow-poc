import { Layer } from "../base";
import { args } from "./add.config";

export const add = () =>
  new Layer({
    name: "Add", // to be shown on our UI
    nameTf: "Add", // name avaialable in tensorflow
    args,
    isMultipleAllowed: true,
    maxMultiple: 3,
  });
