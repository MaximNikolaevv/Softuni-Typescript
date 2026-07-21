"use strict";
class Shape {
}
class Circle extends Shape {
    radius;
    color;
    constructor(radius, color) {
        super();
        this.radius = radius;
        this.color = color;
    }
    GetArea() {
        return `Math.PI * this.radius * this.radius ${this.color}`;
    }
}
class Rectangle extends Shape {
    SideA;
    SideB;
    color;
    constructor(SideA, SideB, color) {
        super();
        this.SideA = SideA;
        this.SideB = SideB;
        this.color = color;
    }
    GetArea() {
        return `${this.SideA * this.SideB} ${this.color}`;
    }
}
const circle = new Circle(5, "red");
console.log(circle.GetArea());
// not working ! 
// abstract class Animal {
//     constructor(protected name: string) {}
//     abstract makeSound(): void;   // само декларация - като в interface
//     move(): void {                 // РЕАЛЕН метод с логика - наследява се директно!
//         console.log(`${this.name} се движи`);
//     }
// }
// class Dog extends Animal {
//     makeSound(): void {
//         console.log(`${this.name}: Woof!`);
//     }
// }
// const dog = new Dog("Rex");
// dog.move();        // "Rex се движи" - наследено директно, без да го пишеш пак!
// dog.makeSound();   // "Rex: Woof!"
//# sourceMappingURL=task9-OOP.js.map