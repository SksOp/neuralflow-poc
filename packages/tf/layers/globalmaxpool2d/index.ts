import { Layer } from "../base";
import { args } from "./globalmaxpool2d.config";

        export const globalmaxpool2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GlobalMaxPool2D", // to be shown on our UI
            nameTf: "GlobalMaxPool2D", // name available in tensorflow
            args,
        });
