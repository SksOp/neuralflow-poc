import { Layer } from "../base";
import { args } from "./groupnormalization.config";

        export const groupnormalization = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GroupNormalization", // to be shown on our UI
            nameTf: "GroupNormalization", // name available in tensorflow
            args,
        });
