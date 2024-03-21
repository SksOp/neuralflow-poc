import { Layer } from "../base";
import { args } from "./normalization.config";

        export const normalization = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Normalization", // to be shown on our UI
            nameTf: "Normalization", // name available in tensorflow
            args,
        });
