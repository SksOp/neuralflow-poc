import { Layer } from "../base";
import { args } from "./conv3dtranspose.config";

        export const conv3dtranspose = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Conv3DTranspose", // to be shown on our UI
            nameTf: "Conv3DTranspose", // name available in tensorflow
            args,
        });
