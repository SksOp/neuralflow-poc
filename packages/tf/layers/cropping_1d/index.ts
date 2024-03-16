import { Layer } from "../base";
import { args } from "./cropping_1d.config";

export const cropping_1d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Cropping 1D", // to be shown on our UI
    nameTf: "Cropping1D", // name avaialable in tensorflow
    args,
  });
