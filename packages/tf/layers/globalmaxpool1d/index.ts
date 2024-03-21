import { Layer } from "../base";
import { args } from "./globalmaxpool1d.config";

        export const globalmaxpool1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GlobalMaxPool1D", // to be shown on our UI
            nameTf: "GlobalMaxPool1D", // name available in tensorflow
            args,
        });
