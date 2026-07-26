// =======================================================
// 3) GENERIC КЛАСОВЕ
// =======================================================

interface User {
    id: number;
    username: string;
}

class GenericStorage<T> {

    data: T;


    constructor(data: T) {

        this.data = data;

    }


}



const numberStorage = new GenericStorage<number>(100);


// T = number
//
// Класът става:
//
// class Storage {
//
//     data:number;
//
// }



const userStorage = new GenericStorage<User>({

    id: 1,
    username: "Max"

});


// T = User
//
// data става:
//
// data: User