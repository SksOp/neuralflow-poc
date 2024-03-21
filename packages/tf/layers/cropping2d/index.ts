import { Layer } from "../base";
import { args } from "./cropping2d.config";

        export const cropping2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Cropping2D", // to be shown on our UI
            nameTf: "Cropping2D", // name available in tensorflow
            args,
        });
