import { Layer } from "../base";
import { args } from "./elu.config";

        export const elu = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ELU", // to be shown on our UI
            nameTf: "ELU", // name available in tensorflow
            args,
        });
