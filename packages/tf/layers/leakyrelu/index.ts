import { Layer } from "../base";
import { args } from "./leakyrelu.config";

        export const leakyrelu = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "LeakyReLU", // to be shown on our UI
            nameTf: "LeakyReLU", // name available in tensorflow
            args,
        });
