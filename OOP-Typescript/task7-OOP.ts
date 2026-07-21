class Counter {

    private static count: number = 0; //static property to hold the count value

    constructor(count: number) {
        Counter.count = count;
    }

    static increment() {
        return this.count++;
    }

    static getCount() {
        return this.count;
    }


}

Counter.increment();

Counter.increment();

console.log(Counter.getCount()); 

