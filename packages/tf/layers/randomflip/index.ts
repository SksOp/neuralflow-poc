import { Layer } from "../base";
import { args } from "./randomflip.config";

        export const randomflip = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RandomFlip", // to be shown on our UI
            nameTf: "RandomFlip", // name available in tensorflow
            args,
        });
