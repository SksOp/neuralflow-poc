import { Layer } from "../base";
import { args } from "./inputspec.config";

        export const inputspec = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "InputSpec", // to be shown on our UI
            nameTf: "InputSpec", // name available in tensorflow
            args,
        });
