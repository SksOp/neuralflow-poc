import { Layer } from "../base";
import { args } from "./convlstm2d.config";

        export const convlstm2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ConvLSTM2D", // to be shown on our UI
            nameTf: "ConvLSTM2D", // name available in tensorflow
            args,
        });
