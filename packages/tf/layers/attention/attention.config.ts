import { Int, Str, Bool, None } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
  {
    name: "use_scale",
    isRequired: false,
    defaultValue: Bool.of(false),
  },
  {
    name: "score_mode",
    isRequired: false,
    defaultValue: Str.of("dot"),
  },
];
