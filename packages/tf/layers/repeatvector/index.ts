import { Layer } from "../base";
import { args } from "./repeatvector.config";

        export const repeatvector = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RepeatVector", // to be shown on our UI
            nameTf: "RepeatVector", // name available in tensorflow
            args,
        });
