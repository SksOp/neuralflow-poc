import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

// tf.keras.layers.TimeDistributed(
//   layer, **kwargs
// )

export const args: ArgsInstance[] = [
  {
    name: "layer",
    isRequired: true
  }
];
