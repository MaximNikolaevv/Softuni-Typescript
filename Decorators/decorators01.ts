function CallWaiter(target: any, name: string, descriptor: PropertyDescriptor) {

    console.log("CallWaiter decorator called");

}

class Waiter {

    @CallWaiter
    serve() {
        console.log("Waiter is coming");

    }

}




const waiter = new Waiter();
waiter.serve();