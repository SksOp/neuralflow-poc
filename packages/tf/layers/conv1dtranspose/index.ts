import { Layer } from "../base";
import { args } from "./conv1dtranspose.config";

        export const conv1dtranspose = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Conv1DTranspose", // to be shown on our UI
            nameTf: "Conv1DTranspose", // name available in tensorflow
            args,
        });
