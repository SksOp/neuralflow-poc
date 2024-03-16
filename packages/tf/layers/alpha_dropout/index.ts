import { Layer } from "../base";
import { args } from "./alpha_dropout.config";

export const alpha_dropout = () =>
  new Layer({
    name: "Alpaha Dropout", // to be shown on our UI
    nameTf: "AlphaDropout", // name avaialable in tensorflow
    args,
  });
