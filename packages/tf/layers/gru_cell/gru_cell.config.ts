import { None, Str, Int, Bool, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

// tf.keras.layers.GRUCell(
//   units,
//   activation='tanh',
//   recurrent_activation='sigmoid',
//   use_bias=True,
//   kernel_initializer='glorot_uniform',
//   recurrent_initializer='orthogonal',
//   bias_initializer='zeros',
//   kernel_regularizer=None,
//   recurrent_regularizer=None,
//   bias_regularizer=None,
//   kernel_constraint=None,
//   recurrent_constraint=None,
//   bias_constraint=None,
//   dropout=0.0,
//   recurrent_dropout=0.0,
//   reset_after=True,
//   **kwargs
// )
export const args: ArgsInstance[] = [
  {
    name: "units",
    isRequired: true,
  },
  {
    name: "activation",
    isRequired: false,
    defaultValue: Str.of("tanh"),
  },
  {
    name: "recurrent_activation",
    isRequired: false,
    defaultValue: Str.of("sigmoid"),
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
    name: "recurrent_initializer",
    isRequired: false,
    defaultValue: Str.of("orthogonal"),
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
    name: "recurrent_regularizer",
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
    name: "recurrent_constraint",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "bias_constraint",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "dropout",
    isRequired: false,
    defaultValue: Float.of(0.0),
  },
  {
    name: "recurrent_dropout",
    isRequired: false,
    defaultValue: Float.of(0.0),
  },
  {
    name: "reset_after",
    isRequired: false,
    defaultValue: Bool.of(true),
  },
];
