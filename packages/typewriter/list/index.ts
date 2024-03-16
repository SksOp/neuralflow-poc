// import { p_types } from "..";
// import { BaseType, p_primitive_types } from "../python_primitive";
// import { py, supported_types } from "../type";

// export class List extends BaseType<p_types[]> implements py {
//   type: supported_types = supported_types.list;
//   constructor(...elements: p_types[]) {
//     super(elements, supported_types.list);
//   }

//   toCodeString(): string {
//     return `(${this.value.map((v) => v.toCodeString()).join(", ")})`;
//   }

//   static of(...elements: p_primitive_types[]): p_types {
//     return new List(...(elements ?? []));
//   }
// }
