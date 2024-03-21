import { Layer } from "../base";
import { args } from "./add.config";

        export const add = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Add", // to be shown on our UI
            nameTf: "Add", // name available in tensorflow
            args,
        });
