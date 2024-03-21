import { Layer } from "../base";
import { args } from "./depthwiseconv1d.config";

        export const depthwiseconv1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "DepthwiseConv1D", // to be shown on our UI
            nameTf: "DepthwiseConv1D", // name available in tensorflow
            args,
        });
