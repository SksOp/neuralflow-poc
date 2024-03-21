import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "factor", isRequired: true },
{name: "value_range", isRequired: false, defaultValue: Tuple.of(Int.of(0), Int.of(255)) },
{name: "seed", isRequired: false, defaultValue: None.of() },
];
