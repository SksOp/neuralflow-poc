import { Layer } from "../base";
import { args } from "./gaussian_noise.config";

export const gaussian_noise = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Gaussian Noise", // to be shown on our UI
    nameTf: "GaussianNoise", // name avaialable in tensorflow
    args,
  });
