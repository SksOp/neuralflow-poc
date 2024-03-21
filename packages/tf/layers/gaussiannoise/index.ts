import { Layer } from "../base";
import { args } from "./gaussiannoise.config";

        export const gaussiannoise = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GaussianNoise", // to be shown on our UI
            nameTf: "GaussianNoise", // name available in tensorflow
            args,
        });
