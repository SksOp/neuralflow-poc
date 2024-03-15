import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

export const args: ArgsInstance[] = [
  {
    name: "data_format",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "keepdims",
    isRequired: false,
    defaultValue: Bool.of(false),
  },
];
