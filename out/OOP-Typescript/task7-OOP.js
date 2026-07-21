"use strict";
class Counter {
    static count = 0; //static property to hold the count value
    constructor(count) {
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
//# sourceMappingURL=task7-OOP.js.map