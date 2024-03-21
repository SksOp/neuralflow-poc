import { Layer } from "../base";
import { args } from "./abstractrnncell.config";

        export const abstractrnncell = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "AbstractRNNCell", // to be shown on our UI
            nameTf: "AbstractRNNCell", // name available in tensorflow
            args,
        });
