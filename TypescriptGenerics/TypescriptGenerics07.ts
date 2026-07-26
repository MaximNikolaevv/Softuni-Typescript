// =======================================================
// 7) MULTIPLE GENERICS (T, K)
// =======================================================



class Database<T, K> {


    data: T;

    key: K;



    constructor(data: T, key: K) {

        this.data = data;
        this.key = key;

    }


}



const carDB = new Database<Car, number>(

    {

        brand: "BMW",
        year: 2007,
        model: "X5",
        drive: function (): string {
            return "Vroom Vroom";
        }

    },

    123

);



// Какво става:
//
// T = Car
//
// K = number
//
//
// След заместване:
//
// data:Car
//
// key:number