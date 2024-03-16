import { Layer } from "../base";
import { args } from "./up_sampling_3d.config";

export const up_sampling_3d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Upsampling 3D", // to be shown on our UI
    nameTf: "UpSampling3D", // name avaialable in tensorflow
    args,
  });
