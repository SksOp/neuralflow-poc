import { Layer } from "../base";
import { args } from "./up_sampling_2d.config";

export const up_sampling_2d = () =>
  new Layer({
    name: "Upsampling 2D", // to be shown on our UI
    nameTf: "UpSampling2D", // name avaialable in tensorflow
    args,
  });
