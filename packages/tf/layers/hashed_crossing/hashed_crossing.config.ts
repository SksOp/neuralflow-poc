import { Int, Str, Bool, None } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

export const args: ArgsInstance[] = [
  {
    name: "num_bins",
    isRequired: true,
  },
  {
    name: "output_mode",
    isRequired: false,
    defaultValue: Str.of("int"),
  },
  {
    name: "sparse",
    isRequired: false,
    defaultValue: Bool.of(false),
  },
];
