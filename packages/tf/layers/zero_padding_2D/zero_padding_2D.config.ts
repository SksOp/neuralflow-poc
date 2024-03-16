import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

// tf.keras.layers.ZeroPadding2D(
//   padding=(1, 1), data_format=None, **kwargs
// )

export const args: ArgsInstance[] = [
{
  name: "padding",
  isRequired: false,
  defaultValue: Tuple.of(Int.of(1),Int.of(1))
},
{
  name: "data_format",
  isRequired: false,
  defaultValue: None.of()
}
];
