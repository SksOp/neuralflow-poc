import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "data_format", isRequired: false, defaultValue: None.of() },
{name: "keepdims", isRequired: false, defaultValue: Bool.of(false) },
];
