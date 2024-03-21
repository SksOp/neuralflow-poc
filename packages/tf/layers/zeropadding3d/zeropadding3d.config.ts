import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "padding", isRequired: false, defaultValue: Tuple.of(Int.of(1), Int.of(1), Int.of(1)) },
{name: "data_format", isRequired: false, defaultValue: None.of() },
];
