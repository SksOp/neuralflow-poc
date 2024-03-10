import { Layer } from "../base";
import { args } from "./concatenate.config";

export const concatenate = () =>
  new Layer({
    name: "Concatenate", // to be shown on our UI
    nameTf: "Concatenate", // name avaialable in tensorflow
    args,
  });
