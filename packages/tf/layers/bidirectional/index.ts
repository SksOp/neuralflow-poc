import { Layer } from "../base";
import { args } from "./bidirectional.config";

        export const bidirectional = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Bidirectional", // to be shown on our UI
            nameTf: "Bidirectional", // name available in tensorflow
            args,
        });
