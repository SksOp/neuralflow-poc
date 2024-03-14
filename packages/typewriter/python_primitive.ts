import { Float } from "./float";
import { Int } from "./int";
import { Str } from "./str";
import { Bool } from "./bool";
import { supported_types } from ".";

export class BaseType<T> {
  type: supported_types;
  value: T;
  constructor(v: T, t: supported_types) {
    this.type = t;
    this.value = v;
  }
}

export type p_primitive_types = Int | Str | Float | Bool;
