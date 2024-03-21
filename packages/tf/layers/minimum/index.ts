import { Layer } from "../base";
import { args } from "./minimum.config";

        export const minimum = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Minimum", // to be shown on our UI
            nameTf: "Minimum", // name available in tensorflow
            args,
        });
