import { Layer } from "../base";
import { args } from "./separableconv1d.config";

        export const separableconv1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "SeparableConv1D", // to be shown on our UI
            nameTf: "SeparableConv1D", // name available in tensorflow
            args,
        });
