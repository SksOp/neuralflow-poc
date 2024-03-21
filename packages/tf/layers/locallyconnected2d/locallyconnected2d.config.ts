import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "filters", isRequired: true },
{name: "kernel_size", isRequired: true },
{name: "strides", isRequired: false, defaultValue: Tuple.of(Int.of(1), Int.of(1)) },
{name: "padding", isRequired: false, defaultValue: Str.of("valid") },
{name: "data_format", isRequired: false, defaultValue: None.of() },
{name: "activation", isRequired: false, defaultValue: None.of() },
{name: "use_bias", isRequired: false, defaultValue: Bool.of(true) },
{name: "kernel_initializer", isRequired: false, defaultValue: Str.of("glorot_uniform") },
{name: "bias_initializer", isRequired: false, defaultValue: Str.of("zeros") },
{name: "kernel_regularizer", isRequired: false, defaultValue: None.of() },
{name: "bias_regularizer", isRequired: false, defaultValue: None.of() },
{name: "activity_regularizer", isRequired: false, defaultValue: None.of() },
{name: "kernel_constraint", isRequired: false, defaultValue: None.of() },
{name: "bias_constraint", isRequired: false, defaultValue: None.of() },
{name: "implementation", isRequired: false, defaultValue: Int.of(1) },
];
