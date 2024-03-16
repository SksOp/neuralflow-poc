import { p_types } from "@/packages/typewriter";
import { cloneDeep } from "lodash";

interface ArgsInstanceBase {
  name: string;
}

interface ArgsInstanceRequired extends ArgsInstanceBase {
  isRequired: true;
}

interface ArgsInstanceWithDefault extends ArgsInstanceBase {
  defaultValue: p_types;
  isRequired: false;
}

export type ArgsInstance = ArgsInstanceRequired | ArgsInstanceWithDefault;

export class Args {
  value: p_types | null;
  name: string;
  private defaultValue: p_types | null;
  isRequired: boolean;

  /**
   * Creates an instance of Args.
   * @param {ArgsInstance} i - An instance of ArgsInstance, enforcing conditional requirement of defaultValue.
   */
  constructor(i: ArgsInstance) {
    this.name = i.name;
    this.isRequired = i.isRequired;
    if (!i.isRequired) {
      this.defaultValue = i.defaultValue;
      this.value = cloneDeep(this.defaultValue);
      return;
    }
    this.defaultValue = null;
    this.value = null;
  }

  /**
   * Returns a formatted name derived from the value property, with each part capitalized and spaces instead of underscores.
   *
   * @return {string} The formatted name.
   */
  getCaptalisedName(): string {
    return this.name
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");
  }

  getDefaultValue(): p_types | null {
    return cloneDeep(this.defaultValue);
  }

  compileWithDefaultValue(): string {
    if (!this.defaultValue) return "";
    return `${this.name}=${this.defaultValue.toCodeString()}`;
  }

  getCompiledString(): string {
    if (!this.value) {
      throw new Error(
        `The argument ${this.name} is required and has no default value.`,
      );
    }
    return `${this.name}=${this.value.toCodeString()}`;
  }
}
/**
 *
 *A base clas for all layers especially for POC
 * @export
 * @class Layer
 */
export class Layer {
  /**
   * Name of the layer
   */
  name: string;
  /**
   * Name of the layer in as used by the TensorFlow library
   */
  nameTf: string;
  /**
   * Arguments of the layer
   */
  args: Args[];
  /**
   * Keyword arguments of the layer
   */
  kwargs: any[];
  /**
   * Input nodes of the layer to whome it is connected to
   */
  input_nodes: Set<Layer> = new Set();
  /**
   * Output ref with which layer will be stored in the python code
   * example
   * batchNormalization_1 = BatchNormalization()(input_for_batchNormalization)
   * batchNormalization_1 is the ref
   */

  /**
   * if the layer allow to have input from multiple layers
   * default is false
   * if true then the layer will accept multiple input layers
   */
  isMultipleAllowed: boolean;

  /**
   * Maximum number of input layers allowed
   * default is Number.MAX_VALUE
   * don't initialize it with 0 or negative number
   *
   * if isMultipleAllowed is true then this will be used to check the maximum number of input layers
   */

  maxMultiple: number;

  meta: {
    id: string;
    ref?: string;
    inputNodesIds?: Set<string>;
  };

  constructor({
    name,
    nameTf,
    args,
    id,
    isMultipleAllowed = false,
    maxMultiple = Number.MAX_VALUE,
  }: {
    name: string;
    nameTf: string;
    args: ArgsInstance[];
    id: string;
    isMultipleAllowed?: boolean;
    maxMultiple?: number;
  }) {
    this.name = name;
    this.nameTf = nameTf;
    this.args = args.map((a) => new Args(a));
    this.kwargs = [];
    this.isMultipleAllowed = isMultipleAllowed;
    this.maxMultiple = maxMultiple;
    this.meta = {
      id: id,
      inputNodesIds: new Set(),
    };
  }

  static of({
    name,
    nameTf,
    args,
    id,
  }: {
    name: string;
    nameTf: string;
    id: string;
    args: ArgsInstance[];
  }) {
    return new Layer({ id, name, nameTf, args });
  }

  /**
   * Set the ref of the layer
   * @param {string} ref
   */
  setRef(ref: string) {
    this.meta.ref = ref;
  }

  getRef() {
    return this.meta.ref;
  }

  setId(id: string) {
    this.meta.id = id;
  }

  getId() {
    return this.meta.id;
  }

  addInputNode(node: Layer) {
    if (this.input_nodes.size >= this.maxMultiple)
      throw new Error(
        `The maximum number of input layers allowed for the layer ${this.name} is ${this.maxMultiple}`,
      );
    this.input_nodes.add(node);
  }

  removeAllInputNodes() {
    this.input_nodes.clear();
  }

  /**
   * @compiler
   *
   * @return {*}  { code: string; link: string }
   * @memberof Layer
   */
  compileLayer(): { code: string; link: string } {
    if (!this.meta.ref)
      throw new Error(`The ref is not set for the layer ${this.name}
    Please set the ref before compiling the layer.
    check the compile method of the model class for more details.
    src/packages/tf/model/base.ts
    `);

    const link = `from tensorflow.keras.layers import ${this.nameTf}`;

    let code = `${this.meta.ref} = ${this.nameTf}(`;
    this.args.forEach((arg, i) => {
      if (arg.value === null)
        throw new Error(
          `The argument ${arg.name} is required and has no default value.`,
        );
      if (arg.getCompiledString() === arg.compileWithDefaultValue()) return;
      code += arg.getCompiledString();
      if (i !== this.args.length - 1) {
        code += ", ";
      }
    });
    code += ")";

    if (this.input_nodes.size > 0) {
      switch (this.input_nodes.size) {
        case 1:
          code += `(${Array.from(this.input_nodes, (node) => node.meta.ref).join(", ")})`;
          break;
        default:
          code += `([${Array.from(this.input_nodes, (node) => node.meta.ref).join(", ")}])`;
      }
    }

    return { code, link };
  }

  cleanUp() {
    this.input_nodes.clear();
  }
}
