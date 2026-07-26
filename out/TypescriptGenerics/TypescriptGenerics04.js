"use strict";
// =======================================================
// 4) GENERIC ИНТЕРФЕЙСИ
// =======================================================
class ProductRepository {
    getData() {
        return {
            id: 1,
            title: "Laptop",
            price: 2500
        };
    }
}
// Какво става:
//
// Repository<Product>
//
// T = Product
//
// Интерфейсът:
//
// getData():T
//
// става:
//
// getData():Product
// implements (договор)
// implements казва:
//"Този клас обещава да има тези методи и свойства."
//Пример:
// interface Flyable {
//     fly(): void;
// }
// class Bird implements Flyable {
//     fly() {
//         console.log("Flying");
//     }
// }
// Интерфейсът казва:
// Flyable:
//     трябва да има fly()
// Класът казва:
// implements Flyable
// "Аз ще го направя."
//# sourceMappingURL=TypescriptGenerics04.js.map