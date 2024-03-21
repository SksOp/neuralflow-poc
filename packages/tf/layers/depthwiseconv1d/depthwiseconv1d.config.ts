import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "kernel_size", isRequired: true },
{name: "strides", isRequired: false, defaultValue: Int.of(1) },
{name: "padding", isRequired: false, defaultValue: Str.of("valid") },
{name: "depth_multiplier", isRequired: false, defaultValue: Int.of(1) },
{name: "data_format", isRequired: false, defaultValue: None.of() },
{name: "dilation_rate", isRequired: false, defaultValue: Int.of(1) },
{name: "activation", isRequired: false, defaultValue: None.of() },
{name: "use_bias", isRequired: false, defaultValue: Bool.of(true) },
{name: "depthwise_initializer", isRequired: false, defaultValue: Str.of("glorot_uniform") },
{name: "bias_initializer", isRequired: false, defaultValue: Str.of("zeros") },
{name: "depthwise_regularizer", isRequired: false, defaultValue: None.of() },
{name: "bias_regularizer", isRequired: false, defaultValue: None.of() },
{name: "activity_regularizer", isRequired: false, defaultValue: None.of() },
{name: "depthwise_constraint", isRequired: false, defaultValue: None.of() },
{name: "bias_constraint", isRequired: false, defaultValue: None.of() },
];
