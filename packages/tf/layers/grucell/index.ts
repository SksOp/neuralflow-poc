import { Layer } from "../base";
import { args } from "./grucell.config";

        export const grucell = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GRUCell", // to be shown on our UI
            nameTf: "GRUCell", // name available in tensorflow
            args,
        });
