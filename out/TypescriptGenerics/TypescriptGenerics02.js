"use strict";
// =======================================================
// 2) T И ЗАМЕСТВАНЕ НА ТИПОВЕ
// =======================================================
// Използване:
const userBox = {
    value: {
        id: 1,
        username: "Max"
    }
};
// Какво прави TypeScript:
//
// Box<User>
//
// означава:
//
// T = User
//
// След заместване:
//
// interface Box {
//
//     value: User;
//
// }
// Следователно:
//
// userBox.value
//
// е:
//
// {
//    id:number;
//    username:string;
// }
//# sourceMappingURL=TypescriptGenerics02.js.map