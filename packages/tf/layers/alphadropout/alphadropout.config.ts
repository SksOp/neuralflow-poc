import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "rate", isRequired: true },
{name: "noise_shape", isRequired: false, defaultValue: None.of() },
{name: "seed", isRequired: false, defaultValue: None.of() },
];
