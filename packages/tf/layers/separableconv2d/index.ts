import { Layer } from "../base";
import { args } from "./separableconv2d.config";

        export const separableconv2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "SeparableConv2D", // to be shown on our UI
            nameTf: "SeparableConv2D", // name available in tensorflow
            args,
        });
