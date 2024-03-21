import { Layer } from "../base";
import { args } from "./prelu.config";

        export const prelu = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "PReLU", // to be shown on our UI
            nameTf: "PReLU", // name available in tensorflow
            args,
        });
