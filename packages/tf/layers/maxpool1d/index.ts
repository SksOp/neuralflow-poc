import { Layer } from "../base";
import { args } from "./maxpool1d.config";

        export const maxpool1d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "MaxPool1D", // to be shown on our UI
            nameTf: "MaxPool1D", // name available in tensorflow
            args,
        });
