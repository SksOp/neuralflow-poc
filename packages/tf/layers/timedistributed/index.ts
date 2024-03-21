import { Layer } from "../base";
import { args } from "./timedistributed.config";

        export const timedistributed = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "TimeDistributed", // to be shown on our UI
            nameTf: "TimeDistributed", // name available in tensorflow
            args,
        });
