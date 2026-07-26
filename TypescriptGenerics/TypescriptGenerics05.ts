// =======================================================
// 5) IMPLEMENTS + GENERICS
// =======================================================


interface Car {

    brand: string;
    year: number;

}


interface Garage<T> {


    getCars(): T[];


}



class BMWGarage implements Garage<Car> {


    getCars(): Car[] {


        return [

            {
                brand: "BMW",
                year: 2007,
                model: "",
                drive: function (): string {
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
