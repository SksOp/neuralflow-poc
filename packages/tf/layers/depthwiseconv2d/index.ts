import { Layer } from "../base";
import { args } from "./depthwiseconv2d.config";

        export const depthwiseconv2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "DepthwiseConv2D", // to be shown on our UI
            nameTf: "DepthwiseConv2D", // name available in tensorflow
            args,
        });
