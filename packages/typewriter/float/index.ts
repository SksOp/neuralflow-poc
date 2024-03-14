import { BaseType } from "../python_primitive";
import { WithStaticOf, py, supported_types } from "../type";

export class Float extends BaseType<number> implements py {
  constructor(i: number) {
    super(i, supported_types.float);
  }
  toCodeString(): string {
    return this.value.toString();
  }
  static of(i?: number): Float {
    return new Float(i ?? 0);
  }
}
