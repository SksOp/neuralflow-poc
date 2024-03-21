import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "pool_size", isRequired: false, defaultValue: Tuple.of(Int.of(2), Int.of(2), Int.of(2)) },
{name: "strides", isRequired: false, defaultValue: None.of() },
{name: "padding", isRequired: false, defaultValue: Str.of("valid") },
{name: "data_format", isRequired: false, defaultValue: None.of() },
];
