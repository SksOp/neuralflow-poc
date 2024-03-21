import { Layer } from "../base";
import { args } from "./locallyconnected2d.config";

        export const locallyconnected2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "LocallyConnected2D", // to be shown on our UI
            nameTf: "LocallyConnected2D", // name available in tensorflow
            args,
        });
