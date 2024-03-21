import { Layer } from "../base";
import { args } from "./simplernncell.config";

        export const simplernncell = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "SimpleRNNCell", // to be shown on our UI
            nameTf: "SimpleRNNCell", // name available in tensorflow
            args,
        });
