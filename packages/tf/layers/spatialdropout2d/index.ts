import { Layer } from "../base";
import { args } from "./spatialdropout2d.config";

        export const spatialdropout2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "SpatialDropout2D", // to be shown on our UI
            nameTf: "SpatialDropout2D", // name available in tensorflow
            args,
        });
