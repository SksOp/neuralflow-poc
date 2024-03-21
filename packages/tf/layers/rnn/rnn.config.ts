import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "cell", isRequired: true },
{name: "return_sequences", isRequired: false, defaultValue: Bool.of(false) },
{name: "return_state", isRequired: false, defaultValue: Bool.of(false) },
{name: "go_backwards", isRequired: false, defaultValue: Bool.of(false) },
{name: "stateful", isRequired: false, defaultValue: Bool.of(false) },
{name: "unroll", isRequired: false, defaultValue: Bool.of(false) },
{name: "time_major", isRequired: false, defaultValue: Bool.of(false) },
];
