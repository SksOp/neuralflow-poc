import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "scale", isRequired: true },
{name: "offset", isRequired: false, defaultValue: Float.of(0.0) },
];
