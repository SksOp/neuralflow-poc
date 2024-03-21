import { Layer } from "../base";
import { args } from "./averagepooling3d.config";

        export const averagepooling3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "AveragePooling3D", // to be shown on our UI
            nameTf: "AveragePooling3D", // name available in tensorflow
            args,
        });
