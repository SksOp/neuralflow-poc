import { Layer } from "../base";
import { args } from "./categoryencoding.config";

        export const categoryencoding = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "CategoryEncoding", // to be shown on our UI
            nameTf: "CategoryEncoding", // name available in tensorflow
            args,
        });
