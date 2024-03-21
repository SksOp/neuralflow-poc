import { Layer } from "../base";
import { args } from "./convlstm3d.config";

        export const convlstm3d = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ConvLSTM3D", // to be shown on our UI
            nameTf: "ConvLSTM3D", // name available in tensorflow
            args,
        });
