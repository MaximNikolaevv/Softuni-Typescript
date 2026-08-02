function AddAge<T extends { new(...args: any[]): {} }>(constructor: T) {  // T extends { new (...args:any[]): {} } -- T трябва да бъде самият клас, който може да създава обекти с new.

    //(constructor:T) - Все едно: constructor = CoolPerson;

    console.log("Decorator started");

    return class extends constructor { // class NewClass extends OldClass // constuctor = CoolPerson



        age = 19;

    }

}


@AddAge
class CoolPerson {

    constructor(public name: string) { }

}

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