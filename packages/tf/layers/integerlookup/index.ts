import { Layer } from "../base";
import { args } from "./integerlookup.config";

        export const integerlookup = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "IntegerLookup", // to be shown on our UI
            nameTf: "IntegerLookup", // name available in tensorflow
            args,
        });
