import { Layer } from "../base";
import { args } from "./spatial_dropout_3d.config";

export const spatial_dropout_3d = () =>
  new Layer({
    name: "Spatial Dropout 3D ", // to be shown on our UI
    nameTf: "SpatialDropout3D", // name avaialable in tensorflow
    args,
  });
