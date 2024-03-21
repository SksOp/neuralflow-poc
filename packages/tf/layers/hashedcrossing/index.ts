import { Layer } from "../base";
import { args } from "./hashedcrossing.config";

        export const hashedcrossing = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "HashedCrossing", // to be shown on our UI
            nameTf: "HashedCrossing", // name available in tensorflow
            args,
        });
