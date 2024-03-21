import { Layer } from "../base";
import { args } from "./batchnormalization.config";

        export const batchnormalization = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "BatchNormalization", // to be shown on our UI
            nameTf: "BatchNormalization", // name available in tensorflow
            args,
        });
