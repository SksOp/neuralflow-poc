import { Layer } from "../base";
import { args } from "./multiheadattention.config";

        export const multiheadattention = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "MultiHeadAttention", // to be shown on our UI
            nameTf: "MultiHeadAttention", // name available in tensorflow
            args,
        });
