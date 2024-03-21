import { Layer } from "../base";
import { args } from "./lambda.config";

        export const lambda = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Lambda", // to be shown on our UI
            nameTf: "Lambda", // name available in tensorflow
            args,
        });
