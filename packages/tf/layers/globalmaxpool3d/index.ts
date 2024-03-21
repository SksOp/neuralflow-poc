import { Layer } from "../base";
import { args } from "./globalmaxpool3d.config";

        export const globalmaxpool3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GlobalMaxPool3D", // to be shown on our UI
            nameTf: "GlobalMaxPool3D", // name available in tensorflow
            args,
        });
