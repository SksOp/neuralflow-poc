import { Layer } from "../base";
import { args } from "./discretization.config";

        export const discretization = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Discretization", // to be shown on our UI
            nameTf: "Discretization", // name available in tensorflow
            args,
        });
