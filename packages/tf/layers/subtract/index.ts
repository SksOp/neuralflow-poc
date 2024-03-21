import { Layer } from "../base";
import { args } from "./subtract.config";

        export const subtract = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Subtract", // to be shown on our UI
            nameTf: "Subtract", // name available in tensorflow
            args,
        });
