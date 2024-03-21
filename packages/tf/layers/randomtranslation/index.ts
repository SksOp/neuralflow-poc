import { Layer } from "../base";
import { args } from "./randomtranslation.config";

        export const randomtranslation = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RandomTranslation", // to be shown on our UI
            nameTf: "RandomTranslation", // name available in tensorflow
            args,
        });
