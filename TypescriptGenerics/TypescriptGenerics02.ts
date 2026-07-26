// =======================================================
// 2) T И ЗАМЕСТВАНЕ НА ТИПОВЕ
// =======================================================


interface User {
    id: number;
    username: string;
}


interface Box<T> {

    value: T;

}


// Използване:

const userBox: Box<User> = {

    value: {

        id: 1,
        username: "Max"

    }

};


// Какво прави TypeScript:
//
// Box<User>
//
// означава:
//
// T = User
//
// След заместване:
//
// interface Box {
//
//     value: User;
//
// }


// Следователно:
//
// userBox.value
//
// е:
//
// {
//    id:number;
//    username:string;
// }


