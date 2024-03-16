import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

// tf.keras.layers.UpSampling1D(
//   size=2, **kwargs
// )

export const args: ArgsInstance[] = [
  {
    name: "size",
    isRequired: false,
    defaultValue: Int.of(2)
  }
];
