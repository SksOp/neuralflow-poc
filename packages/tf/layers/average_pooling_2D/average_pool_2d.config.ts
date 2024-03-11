import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

// tf.keras.layers.AveragePooling2D(
//   pool_size=(2, 2),
//   strides=None,
//   padding='valid',
//   data_format=None,
//   **kwargs
// )

export const args: ArgsInstance[] = [
  {
    name: "pool_size",
    isRequired: false,
    defaultValue: Tuple.of(Int.of(2), Int.of(2)),
  },
  {
    name: "strides",
    isRequired: false,
    defaultValue: None.of(),
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
];
