import { Layer } from "../base";
import { args } from "./simplernn.config";

        export const simplernn = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "SimpleRNN", // to be shown on our UI
            nameTf: "SimpleRNN", // name available in tensorflow
            args,
        });
