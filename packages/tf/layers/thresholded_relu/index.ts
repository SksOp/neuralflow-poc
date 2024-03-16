import { Layer } from "../base";
import { args } from "./thresholded_relu.config";



export const thresholded_relu = () =>
  new Layer({
    name: "Thresholded Relu", // to be shown on our UI
    nameTf: "ThresholdedReLU", // name avaialable in tensorflow
    args,
  });
