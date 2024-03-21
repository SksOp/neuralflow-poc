import { Layer } from "../base";
import { args } from "./attention.config";

        export const attention = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Attention", // to be shown on our UI
            nameTf: "Attention", // name available in tensorflow
            args,
        });
