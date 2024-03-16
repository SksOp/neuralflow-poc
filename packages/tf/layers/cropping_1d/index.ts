import { Layer } from "../base";
import { args } from "./cropping_1d.config";

export const cropping_1d = () =>
  new Layer({
    name: "Cropping 1D", // to be shown on our UI
    nameTf: "Cropping1D", // name avaialable in tensorflow
    args,
  });
