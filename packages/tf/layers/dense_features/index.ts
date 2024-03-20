import { Layer } from "../base";
import { args } from "./dense_features.config";

export const dense_features = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Dense Features", // to be shown on our UI
    nameTf: "DenseFeatures", // name avaialable in tensorflow
    args,
  });
