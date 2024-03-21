import { Layer } from "../base";
import { args } from "./randomzoom.config";

        export const randomzoom = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RandomZoom", // to be shown on our UI
            nameTf: "RandomZoom", // name available in tensorflow
            args,
        });
