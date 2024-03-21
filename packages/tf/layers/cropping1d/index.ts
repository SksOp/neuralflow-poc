import { Layer } from "../base";
import { args } from "./cropping1d.config";

        export const cropping1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Cropping1D", // to be shown on our UI
            nameTf: "Cropping1D", // name available in tensorflow
            args,
        });
