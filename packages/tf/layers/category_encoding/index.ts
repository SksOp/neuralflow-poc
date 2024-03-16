import { Layer } from "../base";
import { args } from "./category_encoding.config";

export const category_encoding = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Category Encoding", // to be shown on our UI
    nameTf: "CategoryEncoding", // name avaialable in tensorflow
    args,
  });
