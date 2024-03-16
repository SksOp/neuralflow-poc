export interface py {
  value: unknown;
  type: supported_types;
  toCodeString(): string;
}

export type WithStaticOf<T> = {
  new (...args: any[]): T; // Constructor signature
  of: (...args: any[]) => T;
};

// export enum supported_types {
//   int,
//   str,
//   float,
//   complex,
//   bool,
//   list,
//   tuple,
//   range,
//   dict,
//   frozenset,
//   set,
//   bytes,
//   bytearray,
//   memoryview,
//   noneType,
// }

export enum supported_types {
  int = "int",
  str = "string",
  float = "float",
  // complex = "Complex",
  bool = "boolean",
  // list = "list",
  tuple = "tuple",
  // range = "Range",
  // dict = "dict",
  // frozenset = "FrozenSet",
  // set = "Set",
  // bytes = "Bytes",
  // bytearray = "ByteArray",
  // memoryview = "MemoryView",
  noneType = "noneType",
}
