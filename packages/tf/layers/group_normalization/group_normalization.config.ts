import { Int, Str, Bool, None, Tuple } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";

export const args: ArgsInstance[] = [
  {
    name: "groups",
    isRequired: false,
    defaultValue: Int.of(32),
  },
  {
    name: "axis",
    isRequired: false,
    defaultValue: Int.of(-1),
  },
  {
    name: "epsilon",
    isRequired: false,
    defaultValue: Float.of(0.001),
  },
  {
    name: "center",
    isRequired: false,
    defaultValue: Bool.of(true),
  },
  {
    name: "scale",
    isRequired: false,
    defaultValue: Bool.of(true),
  },
  {
    name: "beta_initializer",
    isRequired: false,
    defaultValue: Str.of("zeros"),
  },
  {
    name: "gamma_initializer",
    isRequired: false,
    defaultValue: Str.of("ones"),
  },
  {
    name: "beta_regularizer",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "gamma_regularizer",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "beta_constraint",
    isRequired: false,
    defaultValue: None.of(),
  },
  {
    name: "gamma_constraint",
    isRequired: false,
    defaultValue: None.of(),
  },
];
