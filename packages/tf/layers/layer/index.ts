import { Layer } from "../base";
import { args } from "./layer.config";

        export const layer = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Layer", // to be shown on our UI
            nameTf: "Layer", // name available in tensorflow
            args,
        });
