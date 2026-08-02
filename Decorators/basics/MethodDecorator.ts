function Log(
    target: any, // Това е обектът, върху който се намира методът
    name: string, // imeto na metoda koqto se dekorira
    descriptor: PropertyDescriptor) { // Той съдържа информация за самия метод

    const original = descriptor.value; // Запазваме оригиналната функция, която се намира в descriptor.value


    descriptor.value = function () {

        console.log("Before");

        original();

        console.log("After");

    }

}

class User {

    @Log
    login() {

        console.log("Login");

    }

}


const user = new User();
user.login();