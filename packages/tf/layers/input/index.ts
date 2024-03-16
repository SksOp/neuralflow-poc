import { Layer } from "../base";
import { args } from "./input.config";

export const input = ({ id }: { id: string }) =>
  new Layer({
    name: "Input",
    nameTf: "Input",
    args,
  });
