import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "mode", isRequired: false, defaultValue: Str.of("horizontal_and_vertical") },
{name: "seed", isRequired: false, defaultValue: None.of() },
];
