import { Layer } from "../base";
import { args } from "./zeropadding1d.config";

        export const zeropadding1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ZeroPadding1D", // to be shown on our UI
            nameTf: "ZeroPadding1D", // name available in tensorflow
            args,
        });
