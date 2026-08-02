function CountCalls(
    target: any,
    name: string,
    descriptor: PropertyDescriptor) {

    const original = descriptor.value;
    let count = 0;

    descriptor.value = function () {
        count++;
        console.log(`Method ${name} called ${count} times`);
        original();
    }


}


class Calculator {


    @CountCalls
    add() {

        console.log("Adding");

    }

}


const calc = new Calculator();

calc.add();
calc.add();
calc.add();