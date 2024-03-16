import { Layer } from "../base";
import { args } from "./unit_normalization.config";

export const unit_normalization = () =>
  new Layer({
    name: "Unit Normalization", // to be shown on our UI
    nameTf: "UnitNormalization", // name avaialable in tensorflow
    args,
  });
