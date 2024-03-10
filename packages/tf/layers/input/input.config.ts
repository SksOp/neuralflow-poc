import { Int, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
  {
    name: "input_shape",
    isRequired: false,
    defaultValue: Tuple.of(Int.of(32), Int.of(32), Int.of(3)),
  },
  {
    name: "batch_size",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "dtype",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "input_tensor",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "sparse",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "name",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "ragged",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "type_spec",
    isRequired: false,
    defaultValue: None.of(),
  },
];

// (2, 3, 4)
// Tuple.of(Int.of(32), Int.of(32), Int.of(3)),
