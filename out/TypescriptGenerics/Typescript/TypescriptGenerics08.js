"use strict";
// =======================================================
// 8) TYPE INFERENCE
// ========================================================
function wrap(value) {
    return value;
}
const numberResult = wrap(500);
// TypeScript сам разбира:
//
// T = number
const carResult = wrap({
    brand: "BMW",
    year: 2007
});
// TypeScript разбира:
//
// T = {
//
//    brand:string;
//    year:number;
//
// }
//# sourceMappingURL=TypescriptGenerics08.js.map