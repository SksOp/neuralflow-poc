import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "data_format", isRequired: false, defaultValue: Str.of("channels_last") },
{name: "keepdims", isRequired: false, defaultValue: Bool.of(false) },
];
