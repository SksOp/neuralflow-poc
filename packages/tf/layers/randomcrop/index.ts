import { Layer } from "../base";
import { args } from "./randomcrop.config";

        export const randomcrop = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "RandomCrop", // to be shown on our UI
            nameTf: "RandomCrop", // name available in tensorflow
            args,
        });
