import { Float } from "./float";
import { Int } from "./int";
import { Str } from "./str";
import { Bool } from "./bool";
import { None } from "./none";

import { supported_types } from "./type";

export class BaseType<T> {
  type: supported_types;
  value: T;
  constructor(v: T, t: supported_types) {
    this.type = t;
    this.value = v;
  }
  save(): string {
    return JSON.stringify(this);
  }
}

export type p_primitive_types = Int | Str | Float | Bool | None;
