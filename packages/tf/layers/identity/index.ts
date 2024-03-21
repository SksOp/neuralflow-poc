import { Layer } from "../base";
import { args } from "./identity.config";

        export const identity = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Identity", // to be shown on our UI
            nameTf: "Identity", // name available in tensorflow
            args,
        });
