import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "alpha_initializer", isRequired: false, defaultValue: Str.of("zeros") },
{name: "alpha_regularizer", isRequired: false, defaultValue: None.of() },
{name: "alpha_constraint", isRequired: false, defaultValue: None.of() },
{name: "shared_axes", isRequired: false, defaultValue: None.of() },
];
