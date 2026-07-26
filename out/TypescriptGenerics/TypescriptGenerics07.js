"use strict";
// =======================================================
// 7) MULTIPLE GENERICS (T, K)
// =======================================================
class Database {
    data;
    key;
    constructor(data, key) {
        this.data = data;
        this.key = key;
    }
}
const carDB = new Database({
    brand: "BMW",
    year: 2007,
    model: "X5",
    drive: function () {
        return "Vroom Vroom";
    }
}, 123);
// Какво става:
//
// T = Car
//
// K = number
//
//
// След заместване:
//
// data:Car
//
// key:number
//# sourceMappingURL=TypescriptGenerics07.js.map