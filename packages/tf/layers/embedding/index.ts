import { Layer } from "../base";
import { args } from "./embedding.config";

        export const embedding = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Embedding", // to be shown on our UI
            nameTf: "Embedding", // name available in tensorflow
            args,
        });
