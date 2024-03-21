import { Layer } from "../base";
import { args } from "./averagepooling1d.config";

        export const averagepooling1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "AveragePooling1D", // to be shown on our UI
            nameTf: "AveragePooling1D", // name available in tensorflow
            args,
        });
