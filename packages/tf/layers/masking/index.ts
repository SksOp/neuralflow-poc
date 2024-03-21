import { Layer } from "../base";
import { args } from "./masking.config";

        export const masking = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Masking", // to be shown on our UI
            nameTf: "Masking", // name available in tensorflow
            args,
        });
