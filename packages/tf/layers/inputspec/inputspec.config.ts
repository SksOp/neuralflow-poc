import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "dtype", isRequired: false, defaultValue: None.of() },
{name: "shape", isRequired: false, defaultValue: None.of() },
{name: "ndim", isRequired: false, defaultValue: None.of() },
{name: "max_ndim", isRequired: false, defaultValue: None.of() },
{name: "min_ndim", isRequired: false, defaultValue: None.of() },
{name: "axes", isRequired: false, defaultValue: None.of() },
{name: "allow_last_axis_squeeze", isRequired: false, defaultValue: Bool.of(false) },
{name: "name", isRequired: false, defaultValue: None.of() },
];
