import { Layer } from "../base";
import { args } from "./convlstm1d.config";

        export const convlstm1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ConvLSTM1D", // to be shown on our UI
            nameTf: "ConvLSTM1D", // name available in tensorflow
            args,
        });
