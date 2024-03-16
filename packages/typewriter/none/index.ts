import { BaseType } from "../python_primitive";
import { py, supported_types } from "../type";
export class None extends BaseType<null> implements py {
  constructor() {
    super(null, supported_types.noneType);
  }

  toCodeString(): string {
    return "None";
  }

  static of(): None {
    return new None();
  }
}
