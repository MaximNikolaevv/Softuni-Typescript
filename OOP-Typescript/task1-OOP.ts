class Person {

    name: string;
    lastName: string;
    age: number;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    introduce(): string {
        return `Hello, my name is ${this.name} ${this.lastName} and I am ${this.age} years old.`;
    }

}


const person = new Person("John", "Doe", 30);
console.log(person.introduce());

//node out/OOP-Typescript/task1-OOP.js