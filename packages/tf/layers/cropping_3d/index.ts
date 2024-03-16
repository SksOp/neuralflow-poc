import { Layer } from "../base";
import { args } from "./cropping_3d.config";

export const cropping_3d = () =>
  new Layer({
    name: "Cropping 3D", // to be shown on our UI
    nameTf: "Cropping3D", // name avaialable in tensorflow
    args,
  });
