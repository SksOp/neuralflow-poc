import { Layer } from "../base";
import { args } from "./conv_lstm_3d.config";

export const conv_lstm_3d = ({ id }: { id: string }) =>
  new Layer({
    id,
    name: "Conv LSTM 3D", // to be shown on our UI
    nameTf: "ConvLSTM3D", // name avaialable in tensorflow
    args,
  });
