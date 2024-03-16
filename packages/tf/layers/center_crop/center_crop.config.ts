import { Int, Str, Bool, None, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
  {
    name: "height",
    isRequired: true,
  },
  {
    name: "width",
    isRequired: true,
  },
];
