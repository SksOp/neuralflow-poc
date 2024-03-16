import { Layer } from "../base";
import { args } from "./conv_lstm_2d.config";

export const conv_lstm_2d = () =>
  new Layer({
    name: "Conv LSTM 2D", // to be shown on our UI
    nameTf: "ConvLSTM2D", // name avaialable in tensorflow
    args,
  });
