import { Layer } from "../base";
import { args } from "./relu.config";

        export const relu = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ReLU", // to be shown on our UI
            nameTf: "ReLU", // name available in tensorflow
            args,
        });
