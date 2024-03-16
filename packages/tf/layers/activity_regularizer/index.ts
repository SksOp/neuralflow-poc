import { Layer } from "../base";
import { args } from "./activity_regularizer.config";

export const activity_regularizer = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Activity Regularizer", // to be shown on our UI
    nameTf: "ActivityRegularization", // name avaialable in tensorflow
    args,
  });
