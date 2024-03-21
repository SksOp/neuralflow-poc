import { Layer } from "../base";
import { args } from "./globalaveragepooling2d.config";

        export const globalaveragepooling2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GlobalAveragePooling2D", // to be shown on our UI
            nameTf: "GlobalAveragePooling2D", // name available in tensorflow
            args,
        });
