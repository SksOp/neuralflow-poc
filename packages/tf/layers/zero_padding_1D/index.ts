import { Layer } from "../base";
import { args } from "./zero_padding_1D.config";


// tf.keras.layers.ZeroPadding3D(
//   padding=(1, 1, 1), data_format=None, **kwargs
// )

export const zero_padding_1d = () =>
  new Layer({
    name: "Zero Padding 1D", // to be shown on our UI
    nameTf: "ZeroPadding1D", // name avaialable in tensorflow
    args,
  });
