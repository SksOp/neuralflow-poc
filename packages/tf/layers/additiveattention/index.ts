import { Layer } from "../base";
import { args } from "./additiveattention.config";

        export const additiveattention = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "AdditiveAttention", // to be shown on our UI
            nameTf: "AdditiveAttention", // name available in tensorflow
            args,
        });
