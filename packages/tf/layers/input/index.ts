import { Layer } from "../base";
import { args } from "./input.config";

        export const input = ({ id }: { id: string }) => {
        const i = new Layer({
            id,
            name: "Input", // to be shown on our UI
            nameTf: "Input", // name available in tensorflow
            args,
        });
        i.link = "from tensorflow.keras import ";
        return i;
    };