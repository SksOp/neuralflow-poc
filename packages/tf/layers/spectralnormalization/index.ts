import { Layer } from "../base";
import { args } from "./spectralnormalization.config";

        export const spectralnormalization = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "SpectralNormalization", // to be shown on our UI
            nameTf: "SpectralNormalization", // name available in tensorflow
            args,
        });
