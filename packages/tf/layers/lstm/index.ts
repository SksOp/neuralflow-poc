import { Layer } from "../base";
import { args } from "./lstm.config";

        export const lstm = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "LSTM", // to be shown on our UI
            nameTf: "LSTM", // name available in tensorflow
            args,
        });
