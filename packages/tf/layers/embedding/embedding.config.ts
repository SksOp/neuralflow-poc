import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "input_dim", isRequired: true },
{name: "output_dim", isRequired: true },
{name: "embeddings_initializer", isRequired: false, defaultValue: Str.of("uniform") },
{name: "embeddings_regularizer", isRequired: false, defaultValue: None.of() },
{name: "activity_regularizer", isRequired: false, defaultValue: None.of() },
{name: "embeddings_constraint", isRequired: false, defaultValue: None.of() },
{name: "mask_zero", isRequired: false, defaultValue: Bool.of(false) },
{name: "input_length", isRequired: false, defaultValue: None.of() },
{name: "sparse", isRequired: false, defaultValue: Bool.of(false) },
];
