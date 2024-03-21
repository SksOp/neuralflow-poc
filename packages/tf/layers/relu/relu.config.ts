import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "max_value", isRequired: false, defaultValue: None.of() },
{name: "negative_slope", isRequired: false, defaultValue: Float.of(0.0) },
{name: "threshold", isRequired: false, defaultValue: Float.of(0.0) },
];
