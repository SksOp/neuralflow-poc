import { Layer } from "../base";
import { args } from "./concatenate.config";

        export const concatenate = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Concatenate", // to be shown on our UI
            nameTf: "Concatenate", // name available in tensorflow
            args,
        });
