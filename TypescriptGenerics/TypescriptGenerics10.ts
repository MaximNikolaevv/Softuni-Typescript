
// =======================================================
// 10) KEYOF + GENERICS
// =======================================================



const myCar = {

    brand: "BMW",
    model: "M3",
    year: 2024

};



function getProperty<T, K extends keyof T>(

    obj: T,

    key: K

) {


    return obj[key];


}



const brand = getProperty(myCar, "brand");


// Как мисли TypeScript:
//
// T = {
//
// brand:string;
// model:string;
// year:number;
//
// }
//
//
//
// keyof T:
//
// "brand" | "model" | "year"
//
//
// K = "brand"
//
//
// Връща:
//
// car["brand"]
//
// тип:
//
// string



const year = getProperty(car, "year");


// K = "year"
//
// Връща:
//
// number



// getProperty(car,"engine")
//
// НЕ работи
//
// Защото:
//
// "engine"
//
// не съществува в:
//
// keyof T



// =======================================================
// ОБОБЩЕНИЕ
// =======================================================


// Generic:
//
// <T>
//
// означава:
//
// "Не знам типа още"


//
// Когато използваме:
//
// Something<User>
//
// TypeScript прави:
//
// T = User
//
// и заменя всички T с User



// extends:
//
// Ограничение:
//
// T трябва да има определени свойства



// implements:
//
// Класът обещава:
//
// "Ще спазвам този интерфейс"



// keyof:
//
// Дава всички ключове на даден тип



// Multiple Generics:
//
// <T,K>
//
// позволяват повече от един неизвестен тип



// Type inference:
//
// TypeScript сам открива T без да го пишем
