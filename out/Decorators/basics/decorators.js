"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function AddAge(constructor) {
    //(constructor:T) - Все едно: constructor = CoolPerson;
    console.log("Decorator started");
    return class extends constructor {
        age = 19;
    };
}
let CoolPerson = class CoolPerson {
    name;
    constructor(name) {
        this.name = name;
    }
};
CoolPerson = __decorate([
    AddAge,
    __metadata("design:paramtypes", [String])
], CoolPerson);
const personn = new CoolPerson("Max");
console.log(personn);
//new (...args:any[]): {} // "Искам нещо, което може да се създава с new."
// Например:
// class Car {}
// има конструктор.
// new Car()
// работи.
// Следователно Car покрива този тип.
// Но това
// const x = {}
// НЕ покрива типа.
// Защо?
// Защото
// new x()
// не може.
// T extends { new (...args:any[]): {} } -- T трябва да бъде клас (конструктор).
// {} }>(constructor: T) // -- връща нов клас, който наследява класа, който е подаден като T.
//# sourceMappingURL=decorators.js.map