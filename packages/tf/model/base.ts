import { Layer } from "../layers/base";
import { revTopSort } from "./topsort";

type LayerWithRef = { layer: Layer; ref: string };

export class Model {
  name?: string;
  layers: Layer[] = [];

  constructor({ name, layers }: { name?: string; layers: Layer[] }) {
    this.name = name;
    this.layers = layers;
  }

  static of(d: { name?: string; layers: Layer[] }) {
    return new Model(d);
  }

  setName(name: string) {
    this.name = name;
  }

  compile(): string {
    const revSorted = revTopSort(this.layers);
    const sorted: Layer[] = [];
    revSorted.forEach((l, i) =>
      sorted.push(revSorted[revSorted.length - 1 - i]),
    );

    const importStack: string[] = [];
    const codeStack: string[] = [];

    const existingRefs = new Set<string>();

    sorted.forEach((layer, index) => {
      const ref = `${layer.name.toLowerCase().replace(/\s+/g, "_")}_${index}`;

      if (existingRefs.has(ref)) {
        const duplicates = sorted.filter((l) => l.getRef() === ref);

        throw new Error(`Duplicate name of the layer ${ref} found.\n
        Tensorflow does not allow layers with the same name.\n
        The following layers have the same name:\n
        ${duplicates.map((l) => l.name).join(", ")}
        \n \n 
        If you find this error to be incorrect, please open an issue at
        https://github.com/SksOp/neuralflow-poc/issues
        `);
      }

      existingRefs.add(ref);
      layer.setRef(ref);

      const { code, link } = layer.compileLayer();
      importStack.push(link);

      codeStack.push(code);
      layer.cleanUp();
    });

    // using Set to remove duplicates from the importStack
    const imports = Array.from(new Set(importStack)).join("\n");

    const code = codeStack.join("\n"); // this is wrong it is giving the opposite order

    return `${imports}\n\n${code}`;
  }

  static save(m: Model): ModelInstance {
    return {
      name: m.name ?? `neuralflow_model_${Date.now()}`,
      layers: m.layers.map((l) => Layer.save(l)),
      mode: "saved",
      version: process.env.NEXT_PUBLIC_MODEL_VERSION ?? "default",
    };
  }
  static load(s: ModelInstance): Model {
    const layers = s.layers.map((l) => Layer.load(l));
    return new Model({ name: s.name, layers });
  }
}

export type ModelInstance = {
  name: string;
  layers: string[];
  mode: "saved";
  version: string;
};
