import { Int, Str, Bool, None } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

export const args: ArgsInstance[] = [
  {
    name: "axis",
    isRequired: false,
    defaultValue: Int.of(-1),
  },
];
