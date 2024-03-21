import { Layer } from "../base";
import { args } from "./globalaveragepooling3d.config";

        export const globalaveragepooling3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GlobalAveragePooling3D", // to be shown on our UI
            nameTf: "GlobalAveragePooling3D", // name available in tensorflow
            args,
        });
