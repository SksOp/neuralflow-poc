import { Layer } from "../base";
import { args } from "./einsumdense.config";

        export const einsumdense = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "EinsumDense", // to be shown on our UI
            nameTf: "EinsumDense", // name available in tensorflow
            args,
        });
