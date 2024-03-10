import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

// tf.keras.layers.Conv2D(
//   filters,
//   kernel_size,
//   strides=(1, 1),
//   padding='valid',
//   data_format=None,
//   dilation_rate=(1, 1),
//   groups=1,
//   activation=None,
//   use_bias=True,
//   kernel_initializer='glorot_uniform',
//   bias_initializer='zeros',
//   kernel_regularizer=None,
//   bias_regularizer=None,
//   activity_regularizer=None,
//   kernel_constraint=None,
//   bias_constraint=None,
//   **kwargs
// )

export const args: ArgsInstance[] = [
  {
    name: "filters",
    isRequired: true,
  },
  {
    name: "kernel_size",
    isRequired: true,
  },
  {
    name: "strides",
    isRequired: false,
    defaultValue: Tuple.of(Int.of(1), Int.of(1)),
  },
  {
    name: "padding",
    isRequired: false,
    defaultValue: Str.of("valid"),
  },
  {
    name: "data_format",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "dilation_rate",
    isRequired: false,
    defaultValue: Tuple.of(Int.of(1), Int.of(1)),
  },
  {
    name: "groups",
    isRequired: false,
    defaultValue: Int.of(1),
  },
  {
    name: "activation",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "use_bias",
    isRequired: false,
    defaultValue: Bool.of(true),
  },
  {
    name: "kernel_initializer",
    isRequired: false,
    defaultValue: Str.of("glorot_uniform"),
  },
  {
    name: "bias_initializer",
    isRequired: false,
    defaultValue: Str.of("zeros"),
  },
  {
    name: "kernel_regularizer",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "bias_regularizer",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "activity_regularizer",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "kernel_constraint",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "bias_constraint",
    isRequired: false,
    defaultValue: None.of(),
  },
];
