import { Layer } from "../base";
import { args } from "./unitnormalization.config";

        export const unitnormalization = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "UnitNormalization", // to be shown on our UI
            nameTf: "UnitNormalization", // name available in tensorflow
            args,
        });
