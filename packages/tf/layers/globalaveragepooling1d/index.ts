import { Layer } from "../base";
import { args } from "./globalaveragepooling1d.config";

        export const globalaveragepooling1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GlobalAveragePooling1D", // to be shown on our UI
            nameTf: "GlobalAveragePooling1D", // name available in tensorflow
            args,
        });
