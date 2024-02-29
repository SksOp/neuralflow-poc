import { activation } from "./activation";
import { batch_normalisation } from "./batch_normalisation";
import { dense } from "./dense";
export * from "./input";

export const layers = [
    batch_normalisation, dense, activation
]
