import { Layer } from "../base";
import { args } from "./zeropadding2d.config";

        export const zeropadding2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ZeroPadding2D", // to be shown on our UI
            nameTf: "ZeroPadding2D", // name available in tensorflow
            args,
        });
