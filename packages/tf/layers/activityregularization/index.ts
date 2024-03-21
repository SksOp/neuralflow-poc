import { Layer } from "../base";
import { args } from "./activityregularization.config";

        export const activityregularization = ({ id }: { id: string }) => 
        new Layer({
            id,
            name: "ActivityRegularization", // to be shown on our UI
            nameTf: "ActivityRegularization", // name available in tensorflow
            args,
        });
