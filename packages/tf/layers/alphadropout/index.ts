import { Layer } from "../base";
import { args } from "./alphadropout.config";

        export const alphadropout = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "AlphaDropout", // to be shown on our UI
            nameTf: "AlphaDropout", // name available in tensorflow
            args,
        });
