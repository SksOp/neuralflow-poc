import { Layer } from "../base";
import { args } from "./conv1d.config";

        export const conv1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Conv1D", // to be shown on our UI
            nameTf: "Conv1D", // name available in tensorflow
            args,
        });
