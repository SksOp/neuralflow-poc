import { Layer } from "../base";
import { args } from "./center_crop.config";

export const center_crop = () =>
  new Layer({
    name: "Center Crop", // to be shown on our UI
    nameTf: "CenterCrop", // name avaialable in tensorflow
    args,
  });
