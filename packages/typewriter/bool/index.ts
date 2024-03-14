import { BaseType } from "../python_primitive";
import { py, supported_types } from "../type";

export class Bool extends BaseType<boolean> implements py {
  constructor(i?: boolean) {
    super(i ?? false, supported_types.bool);
  }
  toCodeString(): string {
    return this.value ? "True" : "False";
  }
  static of(i?: boolean): Bool {
    return new Bool(i ?? false);
  }
}
