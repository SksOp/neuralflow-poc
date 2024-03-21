import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "units", isRequired: true },
{name: "activation", isRequired: false, defaultValue: Str.of("tanh") },
{name: "use_bias", isRequired: false, defaultValue: Bool.of(true) },
{name: "kernel_initializer", isRequired: false, defaultValue: Str.of("glorot_uniform") },
{name: "recurrent_initializer", isRequired: false, defaultValue: Str.of("orthogonal") },
{name: "bias_initializer", isRequired: false, defaultValue: Str.of("zeros") },
{name: "kernel_regularizer", isRequired: false, defaultValue: None.of() },
{name: "recurrent_regularizer", isRequired: false, defaultValue: None.of() },
{name: "bias_regularizer", isRequired: false, defaultValue: None.of() },
{name: "activity_regularizer", isRequired: false, defaultValue: None.of() },
{name: "kernel_constraint", isRequired: false, defaultValue: None.of() },
{name: "recurrent_constraint", isRequired: false, defaultValue: None.of() },
{name: "bias_constraint", isRequired: false, defaultValue: None.of() },
{name: "dropout", isRequired: false, defaultValue: Float.of(0.0) },
{name: "recurrent_dropout", isRequired: false, defaultValue: Float.of(0.0) },
{name: "return_sequences", isRequired: false, defaultValue: Bool.of(false) },
{name: "return_state", isRequired: false, defaultValue: Bool.of(false) },
{name: "go_backwards", isRequired: false, defaultValue: Bool.of(false) },
{name: "stateful", isRequired: false, defaultValue: Bool.of(false) },
{name: "unroll", isRequired: false, defaultValue: Bool.of(false) },
];
