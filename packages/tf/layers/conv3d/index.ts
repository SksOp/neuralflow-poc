import { Layer } from "../base";
import { args } from "./conv3d.config";

        export const conv3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Conv3D", // to be shown on our UI
            nameTf: "Conv3D", // name available in tensorflow
            args,
        });
