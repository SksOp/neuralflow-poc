import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "layer", isRequired: true },
{name: "merge_mode", isRequired: false, defaultValue: Str.of("concat") },
{name: "weights", isRequired: false, defaultValue: None.of() },
{name: "backward_layer", isRequired: false, defaultValue: None.of() },
];
