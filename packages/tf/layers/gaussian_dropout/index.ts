import { Layer } from "../base";
import { args } from "./gaussian_dropout.config";

export const gaussian_dropout = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Gaussian Dropout", // to be shown on our UI
    nameTf: "GaussianDropout", // name avaialable in tensorflow
    args,
  });
