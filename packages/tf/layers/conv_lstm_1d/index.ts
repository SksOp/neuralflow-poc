import { Layer } from "../base";
import { args } from "./conv_lstm_1d.config";

export const conv_lstm_1d = () =>
  new Layer({
    name: "Conv LSTM 1D", // to be shown on our UI
    nameTf: "ConvLSTM1D", // name avaialable in tensorflow
    args,
  });
