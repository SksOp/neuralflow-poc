import { Layer } from "../base";
import { args } from "./conv2d.config";

        export const conv2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Conv2D", // to be shown on our UI
            nameTf: "Conv2D", // name available in tensorflow
            args,
        });
