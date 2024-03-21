import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "shape", isRequired: false, defaultValue: None.of() },
{name: "batch_size", isRequired: false, defaultValue: None.of() },
{name: "name", isRequired: false, defaultValue: None.of() },
{name: "dtype", isRequired: false, defaultValue: None.of() },
{name: "sparse", isRequired: false, defaultValue: None.of() },
{name: "tensor", isRequired: false, defaultValue: None.of() },
{name: "ragged", isRequired: false, defaultValue: None.of() },
{name: "type_spec", isRequired: false, defaultValue: None.of() },
];
