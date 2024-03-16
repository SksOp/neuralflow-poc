import { Int, Str, Bool, None, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
  {
    name: "num_tokens",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "output_mode",
    isRequired: false,
    defaultValue: Str.of("multi_hot"),
  },
  {
    name: "sparse",
    isRequired: false,
    defaultValue: Bool.of(false),
  },
];
