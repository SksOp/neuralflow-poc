import { Layer } from "../base";
import { args } from "./maximum.config";

        export const maximum = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Maximum", // to be shown on our UI
            nameTf: "Maximum", // name available in tensorflow
            args,
        });
