import { Layer } from "../base";
import { args } from "./maxpooling_3d.config";

export const maxpooling_3d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Max Pooling 3D", // to be shown on our UI
    nameTf: "MaxPooling3D", // name avaialable in tensorflow
    args,
  });
