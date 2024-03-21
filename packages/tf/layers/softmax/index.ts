import { Layer } from "../base";
import { args } from "./softmax.config";

        export const softmax = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Softmax", // to be shown on our UI
            nameTf: "Softmax", // name available in tensorflow
            args,
        });
