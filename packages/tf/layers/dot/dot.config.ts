import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "axes", isRequired: true },
{name: "normalize", isRequired: false, defaultValue: Bool.of(false) },
];
