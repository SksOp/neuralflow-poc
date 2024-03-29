import { Layer } from "../base";
import { args } from "./spatial_dropout_2d.config";

export const spatial_dropout_2d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Spatial Dropout 2D ", // to be shown on our UI
    nameTf: "SpatialDropout2D", // name avaialable in tensorflow
    args,
  });
