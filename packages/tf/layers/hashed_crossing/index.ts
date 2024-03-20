import { Layer } from "../base";
import { args } from "./hashed_crossing.config";

export const hashed_crossing = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Hashed Crossing", // to be shown on our UI
    nameTf: "HashedCrossing", // name avaialable in tensorflow
    args,
  });
