import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

export const args: ArgsInstance[] = [
  {
    name: "l1",
    isRequired: false,
    defaultValue: Float.of(0),
  },
  {
    name: "l2",
    isRequired: false,
    defaultValue: Float.of(0),
  },
];
