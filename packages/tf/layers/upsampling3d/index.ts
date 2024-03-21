import { Layer } from "../base";
import { args } from "./upsampling3d.config";

        export const upsampling3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "UpSampling3D", // to be shown on our UI
            nameTf: "UpSampling3D", // name available in tensorflow
            args,
        });
