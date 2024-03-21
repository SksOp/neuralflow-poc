import { Layer } from "../base";
import { args } from "./randombrightness.config";

        export const randombrightness = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RandomBrightness", // to be shown on our UI
            nameTf: "RandomBrightness", // name available in tensorflow
            args,
        });
