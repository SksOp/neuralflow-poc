import { Layer } from "../base";
import { args } from "./centercrop.config";

        export const centercrop = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "CenterCrop", // to be shown on our UI
            nameTf: "CenterCrop", // name available in tensorflow
            args,
        });
