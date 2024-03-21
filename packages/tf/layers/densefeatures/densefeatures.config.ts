import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "feature_columns", isRequired: true },
{name: "trainable", isRequired: false, defaultValue: Bool.of(true) },
{name: "name", isRequired: false, defaultValue: None.of() },
];
