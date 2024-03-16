import { Layer } from "../base";
import { args } from "./up_sampling_1d.config";

export const up_sampling_1d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Upsampling 1D", // to be shown on our UI
    nameTf: "UpSampling1D", // name avaialable in tensorflow
    args,
  });
