import { Layer } from "../base";
import { args } from "./cropping3d.config";

        export const cropping3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Cropping3D", // to be shown on our UI
            nameTf: "Cropping3D", // name available in tensorflow
            args,
        });
