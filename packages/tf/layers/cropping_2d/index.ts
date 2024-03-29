import { Layer } from "../base";
import { args } from "./cropping_2d.config";

export const cropping_2d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Cropping 2D", // to be shown on our UI
    nameTf: "Cropping2D", // name avaialable in tensorflow
    args,
  });
