import { Layer } from "../base";
import { args } from "./conv2dtranspose.config";

        export const conv2dtranspose = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Conv2DTranspose", // to be shown on our UI
            nameTf: "Conv2DTranspose", // name available in tensorflow
            args,
        });
