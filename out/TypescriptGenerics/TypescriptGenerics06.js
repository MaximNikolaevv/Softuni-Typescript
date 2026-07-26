"use strict";
// =======================================================
// 6) EXTENDS КАТО CONSTRAINT
// =======================================================
function getId(item) {
    return item.id;
}
const user = {
    id: 1,
    username: "Max"
};
getId(user);
// Как работи:
//
// T =
//
// {
//    id:number;
//    username:string;
// }
//
//
//
// Проверка:
//
// Има ли T:
//
// id:number
//
// Да.
//
// Работи.
const product = {
    title: "Laptop",
    price: 2500
};
// getId(product);
//
// НЕ работи.
//
// Защо?
//
// Защото product няма:
//
// id:number
//
// T не изпълнява Entity.
//# sourceMappingURL=TypescriptGenerics06.js.map