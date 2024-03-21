import { Layer } from "../base";
import { args } from "./upsampling2d.config";

        export const upsampling2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "UpSampling2D", // to be shown on our UI
            nameTf: "UpSampling2D", // name available in tensorflow
            args,
        });
