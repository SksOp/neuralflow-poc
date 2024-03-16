import { Layer } from "../base";
import { args } from "./input.config";

export const input = ({ id }: { id: string }) =>
  new Layer({
    id,
    id,
    name: "Input",
    nameTf: "Input",
    args,
  });
