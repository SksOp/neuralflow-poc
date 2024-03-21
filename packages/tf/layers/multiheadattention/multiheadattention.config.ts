import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "num_heads", isRequired: true },
{name: "key_dim", isRequired: true },
{name: "value_dim", isRequired: false, defaultValue: None.of() },
{name: "dropout", isRequired: false, defaultValue: Float.of(0.0) },
{name: "use_bias", isRequired: false, defaultValue: Bool.of(true) },
{name: "output_shape", isRequired: false, defaultValue: None.of() },
{name: "attention_axes", isRequired: false, defaultValue: None.of() },
{name: "kernel_initializer", isRequired: false, defaultValue: Str.of("glorot_uniform") },
{name: "bias_initializer", isRequired: false, defaultValue: Str.of("zeros") },
{name: "kernel_regularizer", isRequired: false, defaultValue: None.of() },
{name: "bias_regularizer", isRequired: false, defaultValue: None.of() },
{name: "activity_regularizer", isRequired: false, defaultValue: None.of() },
{name: "kernel_constraint", isRequired: false, defaultValue: None.of() },
{name: "bias_constraint", isRequired: false, defaultValue: None.of() },
];
