"use strict";
// =======================================================
// 3) GENERIC КЛАСОВЕ
// =======================================================
class GenericStorage {
    data;
    constructor(data) {
        this.data = data;
    }
}
const numberStorage = new GenericStorage(100);
// T = number
//
// Класът става:
//
// class Storage {
//
//     data:number;
//
// }
const userStorage = new GenericStorage({
    id: 1,
    username: "Max"
});
// T = User
//
// data става:
//
// data: User
//# sourceMappingURL=TypescriptGenerics03.js.map