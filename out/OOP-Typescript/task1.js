"use strict";
class Person {
    name;
    lastName;
    age;
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    introduce() {
        return `Hello, my name is ${this.name} ${this.lastName} and I am ${this.age} years old.`;
    }
}
const person = new Person("John", "Doe", 30);
console.log(person.introduce());
//# sourceMappingURL=task1.js.map