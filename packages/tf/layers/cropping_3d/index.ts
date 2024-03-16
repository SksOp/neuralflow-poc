import { Layer } from "../base";
import { args } from "./cropping_3d.config";

export const cropping_3d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Cropping 3D", // to be shown on our UI
    nameTf: "Cropping3D", // name avaialable in tensorflow
    args,
  });
