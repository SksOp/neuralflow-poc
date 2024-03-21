import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "layer", isRequired: true },
{name: "power_iterations", isRequired: false, defaultValue: Int.of(1) },
];
