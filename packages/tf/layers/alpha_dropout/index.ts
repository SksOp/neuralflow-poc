import { Layer } from "../base";
import { args } from "./alpha_dropout.config";

export const alpha_dropout = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Alpaha Dropout", // to be shown on our UI
    nameTf: "AlphaDropout", // name avaialable in tensorflow
    args,
  });
