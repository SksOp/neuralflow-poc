import { Layer } from "../base";
import { args } from "./additive_attention.config";

export const additive_attention = () =>
  new Layer({
    name: "Additive Attention", // to be shown on our UI
    nameTf: "AdditiveAttention", // name avaialable in tensorflow
    args,
    isMultipleAllowed: true,
  });
