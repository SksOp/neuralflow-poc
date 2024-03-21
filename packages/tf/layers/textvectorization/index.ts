import { Layer } from "../base";
import { args } from "./textvectorization.config";

        export const textvectorization = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "TextVectorization", // to be shown on our UI
            nameTf: "TextVectorization", // name available in tensorflow
            args,
        });
