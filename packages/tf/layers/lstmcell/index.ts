import { Layer } from "../base";
import { args } from "./lstmcell.config";

        export const lstmcell = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "LSTMCell", // to be shown on our UI
            nameTf: "LSTMCell", // name available in tensorflow
            args,
        });
