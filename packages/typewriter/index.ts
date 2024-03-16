import { Float } from ".";
import { Bool } from ".";
import { supported_types } from ".";
// import { Dict } from "./dict";
import { Int } from "./int";
// import { List } from "./list";
import { None } from "./none";
import { BaseType, p_primitive_types } from "./python_primitive";
import { Str } from "./str";
import { Tuple } from "./tuple";

export type p_types = p_primitive_types | Tuple | None; // | Dict | List

export class Typewriter extends BaseType<p_types["value"]> {
  constructor(p: p_types) {
    super(p.value, p.type);
  }
  static of(p: p_types): Typewriter {
    return new Typewriter(p);
  }
  save(): string {
    return JSON.stringify(this);
  }
  static fromSavedData(data: string): p_types {
    const parsed = JSON.parse(data) as {
      type: supported_types;
      value: unknown;
    };
    switch (parsed.type) {
      case supported_types.int:
        return Int.of(parsed.value as number);

      case supported_types.str:
        return Str.of(parsed.value as string);

      case supported_types.float:
        return Float.of(parsed.value as number);

      case supported_types.bool:
        return Bool.of(parsed.value as boolean);

      case supported_types.tuple:
        const values = parsed.value as p_types[];
        const parsedValue: p_types[] = values.map((v) =>
          Typewriter.fromSavedData(JSON.stringify(v)),
        );
        return Tuple.of(...parsedValue);

      case supported_types.noneType:
        return None.of();
    }
  }
}

export * from "./str";
export * from "./tuple";
export * from "./float";
export * from "./int";
export * from "./bool";
export * from "./type";
export * from "./none";
// export * from "./list";
// export * from "./dict";
export * from "./python_primitive";
