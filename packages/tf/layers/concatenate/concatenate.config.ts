import { Int, Str, Bool, None } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";


// tf.keras.layers.concatenate(
//   inputs, axis=-1, **kwargs
// )
export const args: ArgsInstance[] = [
  {
    name: "axis",
    isRequired: false,
    defaultValue: Int.of(-1),
  }
];
 