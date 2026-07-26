"use strict";
// =======================================================
// 1) GENERIC ОСНОВИ
// =======================================================
// Без Generic:
const numberValue = 100;
const stringValue = "BMW";
// Проблемът:
// Ако искаме функция, която работи с различни типове,
// ще трябва да пишем много функции.
function printNumber(value) {
    return value;
}
function printString(value) {
    return value;
}
// С Generics:
function printValue(value) {
    return value;
}
// Как работи:
//
// <T> създава неизвестен тип
//
// Този тип ще бъде определен, когато извикаме функцията
//
// Ако подадем number:
//
// T = number
//
// Ако подадем string:
//
// T = string
const a = printValue(100);
// T = number
// a = number
const b = printValue("BMW");
// T = string
// b = string
//# sourceMappingURL=TypescriptGenerics01.js.map