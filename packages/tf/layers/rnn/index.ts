import { Layer } from "../base";
import { args } from "./rnn.config";

        export const rnn = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RNN", // to be shown on our UI
            nameTf: "RNN", // name available in tensorflow
            args,
        });
