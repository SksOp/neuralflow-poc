import { Layer } from "../base";
import { args } from "./dot.config";

        export const dot = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Dot", // to be shown on our UI
            nameTf: "Dot", // name available in tensorflow
            args,
        });
