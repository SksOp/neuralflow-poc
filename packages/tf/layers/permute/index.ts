import { Layer } from "../base";
import { args } from "./permute.config";

        export const permute = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Permute", // to be shown on our UI
            nameTf: "Permute", // name available in tensorflow
            args,
        });
