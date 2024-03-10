import { Int, Str, Bool, None } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

// tf.keras.layers.Flatten(
//   data_format=None, **kwargs
// )

export const args: ArgsInstance[] = [
  {
    name: "data_format",
    isRequired: false,
    defaultValue: None.of(),
  }
];
