import { BaseType } from "../python_primitive";
import { py, supported_types } from "../type";

export class Int extends BaseType<number> implements py {
  constructor(i: number) {
    super(i, supported_types.int);
  }
  toCodeString(): string {
    return this.value.toString();
  }
  static of(i?: number): Int {
    return new Int(i ?? 0);
  }
}
