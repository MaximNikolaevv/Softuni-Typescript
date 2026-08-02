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
function CountCalls(target, name, descriptor) {
    const original = descriptor.value;
    let count = 0;
    descriptor.value = function () {
        count++;
        console.log(`Method ${name} called ${count} times`);
        original();
    };
}
class Calculator {
    add() {
        console.log("Adding");
    }
}
__decorate([
    CountCalls,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Calculator.prototype, "add", null);
const calc = new Calculator();
calc.add();
calc.add();
calc.add();
//# sourceMappingURL=decorators02.js.map