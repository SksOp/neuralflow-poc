import { batch_normalization } from "./batch_normalization";
import { dense } from "./dense";
import { concatenate } from "./concatenate";
import { maxpool_2d } from "./maxpool_2D";
import { conv_2d } from "./conv_2D";
import { flatten } from "./flatten";
import { dropout } from "./dropout";
import { average_pool_2d } from "./average_pooling_2D";

export * from "./input";
export * from "./base";
export const layers = [
  dense,
  batch_normalization,
  concatenate,
  maxpool_2d,
  conv_2d,
  flatten,
  dropout,
  average_pool_2d,
  
];
