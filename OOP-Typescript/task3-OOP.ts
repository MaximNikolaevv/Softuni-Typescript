class Vehicle {

    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    drive(): string {
        return `Driving a ${this.brand}`;
    }

}


class Car extends Vehicle {

    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        super(brand);
        this.brand = brand;
        this.model = model;
    }

    override drive(): string {
        return `Driving a ${this.brand} ${this.model}`;
    }
}

const car = new Car("Toyota", "Corolla");

console.log(car.drive());