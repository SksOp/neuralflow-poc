import { Layer } from "../base";
import { args } from "./wrapper.config";

export const Wrapper = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Wrapper", // to be shown on our UI
    nameTf: "Wrapper", // name avaialable in tensorflow
    args,
  });
