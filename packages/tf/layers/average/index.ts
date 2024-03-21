import { Layer } from "../base";
import { args } from "./average.config";

        export const average = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Average", // to be shown on our UI
            nameTf: "Average", // name available in tensorflow
            args,
        });
