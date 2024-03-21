import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "num_bins", isRequired: true },
{name: "output_mode", isRequired: false, defaultValue: Str.of("int") },
{name: "sparse", isRequired: false, defaultValue: Bool.of(false) },
];
