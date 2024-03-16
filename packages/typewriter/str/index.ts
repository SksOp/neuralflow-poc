import { BaseType } from "../python_primitive";
import { py, supported_types } from "../type";

export class Str extends BaseType<string> implements py {
  constructor(s: string) {
    super(s, supported_types.str);
  }
  toCodeString(): string {
    return `"${this.value}"`;
  }
  static of(s?: string): Str {
    return new Str(s ?? "");
  }
}
