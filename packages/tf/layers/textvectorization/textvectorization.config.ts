import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "max_tokens", isRequired: false, defaultValue: None.of() },
{name: "standardize", isRequired: false, defaultValue: Str.of("lower_and_strip_punctuation") },
{name: "split", isRequired: false, defaultValue: Str.of("whitespace") },
{name: "ngrams", isRequired: false, defaultValue: None.of() },
{name: "output_mode", isRequired: false, defaultValue: Str.of("int") },
{name: "output_sequence_length", isRequired: false, defaultValue: None.of() },
{name: "pad_to_max_tokens", isRequired: false, defaultValue: Bool.of(false) },
{name: "vocabulary", isRequired: false, defaultValue: None.of() },
{name: "idf_weights", isRequired: false, defaultValue: None.of() },
{name: "sparse", isRequired: false, defaultValue: Bool.of(false) },
{name: "ragged", isRequired: false, defaultValue: Bool.of(false) },
{name: "encoding", isRequired: false, defaultValue: Str.of("utf-8") },
];
