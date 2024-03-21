import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "factor", isRequired: true },
{name: "fill_mode", isRequired: false, defaultValue: Str.of("reflect") },
{name: "interpolation", isRequired: false, defaultValue: Str.of("bilinear") },
{name: "seed", isRequired: false, defaultValue: None.of() },
{name: "fill_value", isRequired: false, defaultValue: Float.of(0.0) },
];
