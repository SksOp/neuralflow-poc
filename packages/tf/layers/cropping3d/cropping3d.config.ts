import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "cropping", isRequired: false, defaultValue: Tuple.of(Tuple.of(Int.of(1), Int.of(1)), Tuple.of(Int.of(1), Int.of(1)), Tuple.of(Int.of(1), Int.of(1))) },
{name: "data_format", isRequired: false, defaultValue: None.of() },
];
