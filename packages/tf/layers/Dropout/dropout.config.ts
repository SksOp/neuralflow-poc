import { Int, Str, Bool, None } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

// tf.keras.layers.Dropout(
//   rate, noise_shape=None, seed=None, **kwargs
// )

export const args: ArgsInstance[] = [
  {
    name: "rate",
    isRequired: true,
  },
  {
    name: "noise_shape",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "seed",
    isRequired: false,
    defaultValue: None.of(),
  },
];
