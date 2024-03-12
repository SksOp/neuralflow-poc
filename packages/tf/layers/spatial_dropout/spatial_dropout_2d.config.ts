import { Int, Str, Bool, None } from "@/packages/typewriter";
import { ArgsInstance } from "../base";
import { Float } from "@/packages/typewriter/float";



export const args: ArgsInstance[] = [
  {
    name: "rate",
    isRequired: true,
  },
  {
    name: "data_format",
    isRequired: false,
    defaultValue: None.of(),
  },
];
