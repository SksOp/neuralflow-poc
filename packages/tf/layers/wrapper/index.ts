import { Layer } from "../base";
import { args } from "./wrapper.config";

        export const wrapper = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "Wrapper", // to be shown on our UI
            nameTf: "Wrapper", // name available in tensorflow
            args,
        });
