import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

// tf.keras.layers.ZeroPadding1D(
//   padding=1, **kwargs
// // )

export const args: ArgsInstance[] = [
{
  name: "padding",
  isRequired: false,
  defaultValue: Int.of(1)
}
];
