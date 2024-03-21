import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "size", isRequired: false, defaultValue: Tuple.of(Int.of(2), Int.of(2), Int.of(2)) },
{name: "data_format", isRequired: false, defaultValue: None.of() },
];
