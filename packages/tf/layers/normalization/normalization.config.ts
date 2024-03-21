import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "axis", isRequired: false, defaultValue: Int.of(-1) },
{name: "mean", isRequired: false, defaultValue: None.of() },
{name: "variance", isRequired: false, defaultValue: None.of() },
{name: "invert", isRequired: false, defaultValue: Bool.of(false) },
];
