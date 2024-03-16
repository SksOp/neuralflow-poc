import { Layer } from "../base";
import { args } from "./time_distributed.config";

export const time_distributed = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Time Distributed", // to be shown on our UI
    nameTf: "TimeDistributed", // name avaialable in tensorflow
    args,
  });
