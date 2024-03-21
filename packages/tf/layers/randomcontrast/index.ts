import { Layer } from "../base";
import { args } from "./randomcontrast.config";

        export const randomcontrast = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RandomContrast", // to be shown on our UI
            nameTf: "RandomContrast", // name available in tensorflow
            args,
        });
