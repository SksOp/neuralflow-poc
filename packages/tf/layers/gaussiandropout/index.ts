import { Layer } from "../base";
import { args } from "./gaussiandropout.config";

        export const gaussiandropout = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "GaussianDropout", // to be shown on our UI
            nameTf: "GaussianDropout", // name available in tensorflow
            args,
        });
