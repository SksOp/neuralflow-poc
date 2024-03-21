import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "stddev", isRequired: true },
{name: "seed", isRequired: false, defaultValue: None.of() },
];