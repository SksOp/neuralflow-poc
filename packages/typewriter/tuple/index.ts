import { p_types } from "..";
import { BaseType } from "../python_primitive";
import { py, supported_types } from "../type";

export class Tuple extends BaseType<p_types[]> implements py {
  constructor(...elements: p_types[]) {
    super(elements, supported_types.tuple);
  }

  // Method to convert the Tuple into a code string format
  toCodeString(): string {
    const length = this.value.length;

    if (length === 1) {
      // in python a single element tuple should have a trailing comma
      return `(${this.value[0].toCodeString()},)`;
    }
    return `(${this.value.map((v) => v.toCodeString()).join(", ")})`;
  }

  // Static method for creating a new Tuple instance
  static of(...elements: p_types[]): Tuple {
    return new Tuple(...elements);
  }
}
