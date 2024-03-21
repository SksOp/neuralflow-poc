import { Layer } from "../base";
import { args } from "./spatialdropout1d.config";

        export const spatialdropout1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "SpatialDropout1D", // to be shown on our UI
            nameTf: "SpatialDropout1D", // name available in tensorflow
            args,
        });
