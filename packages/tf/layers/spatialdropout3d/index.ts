import { Layer } from "../base";
import { args } from "./spatialdropout3d.config";

        export const spatialdropout3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "SpatialDropout3D", // to be shown on our UI
            nameTf: "SpatialDropout3D", // name available in tensorflow
            args,
        });
