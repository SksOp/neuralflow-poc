import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "bin_boundaries", isRequired: false, defaultValue: None.of() },
{name: "num_bins", isRequired: false, defaultValue: None.of() },
{name: "epsilon", isRequired: false, defaultValue: Float.of(0.01) },
{name: "output_mode", isRequired: false, defaultValue: Str.of("int") },
{name: "sparse", isRequired: false, defaultValue: Bool.of(false) },
];
