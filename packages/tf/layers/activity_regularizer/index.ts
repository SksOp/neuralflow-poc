import { Layer } from "../base";
import { args } from "./activity_regularizer.config";

export const activity_regularizer = () =>
  new Layer({
    name: "Activity Regularizer", // to be shown on our UI
    nameTf: "ActivityRegularization", // name avaialable in tensorflow
    args,
  });
