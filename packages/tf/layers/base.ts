import { p_types } from "@/packages/typewriter";

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
  defaultValue: p_types | null;
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
      this.value = this.defaultValue;
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
  input_nodes: Layer[] = [];
  /**
   * Output ref with which layer will be stored in the python code
   * example
   * batchNormalization_1 = BatchNormalization()(input_for_batchNormalization)
   * batchNormalization_1 is the ref
   */
  ref: string | null = null;

  /**
   * Id of the layer
   * id: string;
   * for now neglecting this idea of id, I was thinking to use this as the value in which it will be stored in the py
   * id = batchNormalization_1
   * batchNormalization_1 = BatchNormalization()(input_for_batchNormalization)
   */

  constructor({
    name,
    nameTf,
    args,
  }: {
    name: string;
    nameTf: string;
    args: ArgsInstance[];
  }) {
    this.name = name;
    this.nameTf = nameTf;
    this.args = args.map((a) => new Args(a));
    this.kwargs = [];
  }

  static of({
    name,
    nameTf,
    args,
  }: {
    name: string;
    nameTf: string;
    args: ArgsInstance[];
  }) {
    return new Layer({ name, nameTf, args });
  }

  /**
   * Set the ref of the layer
   * @param {string} ref
   */
  setRef(ref: string) {
    this.ref = ref;
  }

  /**
   * @compiler
   *
   * @return {*}  { code: string; link: string }
   * @memberof Layer
   */
  compileLayer(): { code: string; link: string } {
    if (!this.ref)
      throw new Error(`The ref is not set for the layer ${this.name}
    Please set the ref before compiling the layer.
    check the compile method of the model class for more details.
    src/packages/tf/model/base.ts
    `);

    const link = `from tensorflow.keras.layers import ${this.nameTf}`;

    let code = `${this.ref} = ${this.nameTf}(`;
    this.args.forEach((arg, i) => {
      // if (arg.value === arg.defaultValue) return;
      code += arg.getCompiledString();
      if (i !== this.args.length - 1) {
        code += ", ";
      }
    });
    code += ")";

    if (this.input_nodes.length > 0) {
      switch (this.input_nodes.length) {
        case 1:
          code += `(${this.input_nodes.map((node) => node.ref).join(", ")})`;
          break;
        default:
          code += `([${this.input_nodes.map((node) => node.ref).join(", ")}])`;
      }
    }

    return { code, link };
  }
}
