"use strict";
// =======================================================
// 5) IMPLEMENTS + GENERICS
// =======================================================
class BMWGarage {
    getCars() {
        return [
            {
                brand: "BMW",
                year: 2007,
                model: "",
                drive: function () {
                    throw new Error("Function not implemented.");
                }
            }
        ];
    }
}
// implements казва:
//
// "Този клас обещава да спази интерфейса"
//
//
// Garage<Car>
//
// T = Car
//
// Методът трябва да бъде:
//
// getCars():Car[]
//# sourceMappingURL=TypescriptGenerics05.js.map