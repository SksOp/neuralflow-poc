import { Layer } from "../base";
import { args } from "./randomheight.config";

        export const randomheight = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RandomHeight", // to be shown on our UI
            nameTf: "RandomHeight", // name available in tensorflow
            args,
        });
