import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "function", isRequired: true },
{name: "output_shape", isRequired: false, defaultValue: None.of() },
{name: "mask", isRequired: false, defaultValue: None.of() },
{name: "arguments", isRequired: false, defaultValue: None.of() },
];
