interface Animal {  // Define an interface named Animal
    makeSound(): string; // Declare a method named makeSound that returns a string
}

class Dog implements Animal { // Implement the Animal interface in the Dog class

    makeSound(): string {
        return "Woof!";
    }

}

const dog = new Dog();

console.log(dog.makeSound());