import { Layer } from "../base";
import { args } from "./maxpool3d.config";

        export const maxpool3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "MaxPool3D", // to be shown on our UI
            nameTf: "MaxPool3D", // name available in tensorflow
            args,
        });
