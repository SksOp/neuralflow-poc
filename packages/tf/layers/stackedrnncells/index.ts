import { Layer } from "../base";
import { args } from "./stackedrnncells.config";

        export const stackedrnncells = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "StackedRNNCells", // to be shown on our UI
            nameTf: "StackedRNNCells", // name available in tensorflow
            args,
        });
