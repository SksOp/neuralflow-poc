import { Layer } from "../base";
import { args } from "./thresholdedrelu.config";

        export const thresholdedrelu = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ThresholdedReLU", // to be shown on our UI
            nameTf: "ThresholdedReLU", // name available in tensorflow
            args,
        });
