import { Layer } from "../base";
import { args } from "./densefeatures.config";

        export const densefeatures = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "DenseFeatures", // to be shown on our UI
            nameTf: "DenseFeatures", // name available in tensorflow
            args,
        });
