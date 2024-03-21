import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "trainable", isRequired: false, defaultValue: Bool.of(true) },
{name: "name", isRequired: false, defaultValue: None.of() },
{name: "dtype", isRequired: false, defaultValue: None.of() },
{name: "dynamic", isRequired: false, defaultValue: Bool.of(false) },
];
