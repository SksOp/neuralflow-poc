import { Layer } from "../base";
import { args } from "./layernormalization.config";

        export const layernormalization = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "LayerNormalization", // to be shown on our UI
            nameTf: "LayerNormalization", // name available in tensorflow
            args,
        });
