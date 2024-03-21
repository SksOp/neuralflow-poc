import { Layer } from "../base";
import { args } from "./upsampling1d.config";

        export const upsampling1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "UpSampling1D", // to be shown on our UI
            nameTf: "UpSampling1D", // name available in tensorflow
            args,
        });
