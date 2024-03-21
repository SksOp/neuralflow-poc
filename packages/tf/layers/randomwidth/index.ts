import { Layer } from "../base";
import { args } from "./randomwidth.config";

        export const randomwidth = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RandomWidth", // to be shown on our UI
            nameTf: "RandomWidth", // name available in tensorflow
            args,
        });
