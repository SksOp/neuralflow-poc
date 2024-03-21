import { Int, Str, Bool, None, Tuple, Float } from "@/packages/typewriter";
import { ArgsInstance } from "../base";

export const args: ArgsInstance[] = [
{name: "height", isRequired: true },
{name: "width", isRequired: true },
{name: "interpolation", isRequired: false, defaultValue: Str.of("bilinear") },
{name: "crop_to_aspect_ratio", isRequired: false, defaultValue: Bool.of(false) },
];
