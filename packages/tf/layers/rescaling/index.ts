import { Layer } from "../base";
import { args } from "./rescaling.config";

        export const rescaling = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Rescaling", // to be shown on our UI
            nameTf: "Rescaling", // name available in tensorflow
            args,
        });
