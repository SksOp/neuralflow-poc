import { Layer } from "../base";
import { args } from "./gru.config";

        export const gru = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GRU", // to be shown on our UI
            nameTf: "GRU", // name available in tensorflow
            args,
        });
