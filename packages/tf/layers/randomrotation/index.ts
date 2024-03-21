import { Layer } from "../base";
import { args } from "./randomrotation.config";

        export const randomrotation = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RandomRotation", // to be shown on our UI
            nameTf: "RandomRotation", // name available in tensorflow
            args,
        });
