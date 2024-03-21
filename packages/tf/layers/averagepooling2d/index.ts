import { Layer } from "../base";
import { args } from "./averagepooling2d.config";

        export const averagepooling2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "AveragePooling2D", // to be shown on our UI
            nameTf: "AveragePooling2D", // name available in tensorflow
            args,
        });
