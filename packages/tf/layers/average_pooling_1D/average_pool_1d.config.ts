import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

export const args: ArgsInstance[] = [
  {
    name: "pool_size",
    isRequired: false,
    defaultValue: Int.of(2),
  },
  {
    name: "strides",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "padding",
    isRequired: false,
    defaultValue: Str.of("valid"),
  },
  {
    name: "data_format",
    isRequired: false,
    defaultValue: Str.of("channels_last"),
  },
];
