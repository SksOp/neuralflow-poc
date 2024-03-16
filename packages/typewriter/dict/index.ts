// import { BaseType } from "../python_primitive";
// import { py, supported_types } from "../type";
// import { p_types } from "../index";

// export class Dict
//   extends BaseType<Record<string | number, p_types | Dict>>
//   implements py
// {
//   // Constructor to initialize the Tuple
//   constructor(elements: Record<string | number, p_types | Dict>) {
//     super(elements, supported_types.dict);
//     this.value = elements;
//   }

//   // Method to convert the Tuple into a code string format
//   toCodeString(): string {
//     return `{${Object.entries(this.value)
//       .map(([k, v]) => `${k}:${v.toCodeString()}`)
//       .join(",")}}`;
//   }

//   // Static method for creating a new Tuple instance
//   static of(elements?: Record<string | number, p_types>): Dict {
//     return new Dict(elements ?? {});
//   }
// }
