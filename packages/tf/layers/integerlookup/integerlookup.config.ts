import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "max_tokens", isRequired: false, defaultValue: None.of() },
{name: "num_oov_indices", isRequired: false, defaultValue: Int.of(1) },
{name: "mask_token", isRequired: false, defaultValue: None.of() },
{name: "oov_token", isRequired: false, defaultValue: Int.of(-1) },
{name: "vocabulary", isRequired: false, defaultValue: None.of() },
{name: "vocabulary_dtype", isRequired: false, defaultValue: Str.of("int64") },
{name: "idf_weights", isRequired: false, defaultValue: None.of() },
{name: "invert", isRequired: false, defaultValue: Bool.of(false) },
{name: "output_mode", isRequired: false, defaultValue: Str.of("int") },
{name: "sparse", isRequired: false, defaultValue: Bool.of(false) },
{name: "pad_to_max_tokens", isRequired: false, defaultValue: Bool.of(false) },
];
