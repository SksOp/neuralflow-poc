import { Int, Str, Bool, None } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";
// arguments
export const args: ArgsInstance[] = [
  {
    name: "num_bins",
    isRequired: true,
  },
  {
    name: "mask_value",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "salt",
    isRequired: false,
    defaultValue: None.of(),
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
