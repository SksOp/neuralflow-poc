import { Layer } from "../base";
import { args } from "./reshape.config";

        export const reshape = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Reshape", // to be shown on our UI
            nameTf: "Reshape", // name available in tensorflow
            args,
        });
