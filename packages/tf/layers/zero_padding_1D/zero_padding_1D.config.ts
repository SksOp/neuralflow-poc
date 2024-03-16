import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

// tf.keras.layers.ThresholdedReLU(
//   theta=1.0, **kwargs
// )

export const args: ArgsInstance[] = [
{
  name: "padding",
  isRequired: false,
  defaultValue: Float.of(1.0),
}
];
