import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "rate", isRequired: true },
{name: "data_format", isRequired: false, defaultValue: None.of() },
];
