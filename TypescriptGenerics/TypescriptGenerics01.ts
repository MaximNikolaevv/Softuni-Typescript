interface User {
    id: number;
    username: string;
}
interface Box<T> {
    value: T;
}

const userBox: Box<User> = {
    value: {
        id: 1,
        username: "Max"
    }
};



// Box <User> durji User tipa i v interface Box<T> T stava User toest value-to e ravno na User tipa
