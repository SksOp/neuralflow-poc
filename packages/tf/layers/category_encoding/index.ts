import { Layer } from "../base";
import { args } from "./category_encoding.config";

export const category_encoding = () =>
  new Layer({
    name: "Category Encoding", // to be shown on our UI
    nameTf: "CategoryEncoding", // name avaialable in tensorflow
    args,
  });
