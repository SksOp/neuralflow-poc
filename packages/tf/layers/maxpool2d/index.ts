import { Layer } from "../base";
import { args } from "./maxpool2d.config";

        export const maxpool2d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "MaxPool2D", // to be shown on our UI
            nameTf: "MaxPool2D", // name available in tensorflow
            args,
        });
