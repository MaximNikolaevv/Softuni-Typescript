"use strict";
class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        return `Driving a ${this.brand}`;
    }
}
class Car extends Vehicle {
    brand;
    model;
    constructor(brand, model) {
        super(brand);
        this.brand = brand;
        this.model = model;
    }
    drive() {
        return `Driving a ${this.brand} ${this.model}`;
    }
}
const car = new Car("Toyota", "Corolla");
console.log(car.drive());
//# sourceMappingURL=task3-OOP.js.map