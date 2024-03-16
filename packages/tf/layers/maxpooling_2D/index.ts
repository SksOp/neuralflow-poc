import { Layer } from "../base";
import { args } from "./maxpooling_2d.config";

export const maxpooling_2d = ({ id }: { id: string }) =>
  new Layer({
    name: "Max Pooling 2D", // to be shown on our UI
    nameTf: "MaxPooling2D", // name avaialable in tensorflow
    args,
  });
