import { Layer } from "../base";
import { args } from "./group_normalization.config";

export const group_normalization = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Group Normalization", // to be shown on our UI
    nameTf: "GroupNormalization", // name avaialable in tensorflow
    args,
  });
