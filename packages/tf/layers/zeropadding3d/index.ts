import { Layer } from "../base";
import { args } from "./zeropadding3d.config";

        export const zeropadding3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ZeroPadding3D", // to be shown on our UI
            nameTf: "ZeroPadding3D", // name available in tensorflow
            args,
        });
