import { Layer } from "../base";
import { args } from "./locallyconnected1d.config";

        export const locallyconnected1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "LocallyConnected1D", // to be shown on our UI
            nameTf: "LocallyConnected1D", // name available in tensorflow
            args,
        });
