import { Layer } from "../base";
import { args } from "./wrapper.config";



export const Wrapper = () =>
  new Layer({
    name: "Wrapper", // to be shown on our UI
    nameTf: "Wrapper", // name avaialable in tensorflow
    args,
  });
