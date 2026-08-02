//const result = original.apply(this, args); // Call the original method with the correct context and arguments


function Uppercase(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
) {

    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = original.apply(this, args);
        console.log(result.toUpperCase());
       
    }

}


class Messages {


    @Uppercase
    getMessage() {

        return "hello world";

    }

}


const msg = new Messages();

console.log(msg.getMessage());