import { Layer } from "../base";
import { args } from "./resizing.config";

        export const resizing = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Resizing", // to be shown on our UI
            nameTf: "Resizing", // name available in tensorflow
            args,
        });
