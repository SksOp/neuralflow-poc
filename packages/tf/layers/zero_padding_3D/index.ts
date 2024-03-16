import { Layer } from "../base";
import { args } from "./zero_padding_3D.config";

// tf.keras.layers.ZeroPadding3D(
//   padding=(1, 1, 1), data_format=None, **kwargs
// )

export const zero_padding_3d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Zero Padding 3D", // to be shown on our UI
    nameTf: "ZeroPadding3D", // name avaialable in tensorflow
    args,
  });
