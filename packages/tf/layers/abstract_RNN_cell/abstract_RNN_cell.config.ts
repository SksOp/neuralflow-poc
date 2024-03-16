import { Int, Str, Bool, None } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
// tf.keras.layers.AbstractRNNCell(
//     trainable=True, name=None, dtype=None, dynamic=False, **kwargs
// )
export const args: ArgsInstance[] = [
  {
    name: "trainable",
    isRequired: false,
    defaultValue: Bool.of(),
  },
  {
    name: "name",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "dtype",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "dynamic",
    isRequired: false,
    defaultValue: Bool.of(),
  },
];
