import { Layer } from "../base";
import { args } from "./stringlookup.config";

        export const stringlookup = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "StringLookup", // to be shown on our UI
            nameTf: "StringLookup", // name available in tensorflow
            args,
        });
