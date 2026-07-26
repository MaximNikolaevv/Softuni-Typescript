// =======================================================
// 4) GENERIC ИНТЕРФЕЙСИ
// =======================================================


interface Repository<T> {


    getData(): T;


}



interface Product {

    id: number;
    title: string;
    price: number;

}



class ProductRepository implements Repository<Product> {


    getData(): Product {

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