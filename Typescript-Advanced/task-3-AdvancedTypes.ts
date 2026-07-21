function OptionalMultiplier(param1: (string | number | undefined), param2?: (string | number | undefined), param3?: (string | number | undefined)) {


    let result: number = 1;

    if (typeof param1 === 'number') {
        result *= param1;
    } else if (typeof param1 === 'string') {
        let parsedParam1: number = Number(param1);
        if (!isNaN(parsedParam1)) {
            result *= parsedParam1;
        }
    }

    if (typeof param2 === 'number') {
        result *= param2;
    } else if (typeof param2 === 'string') {
        let parsedParam2: number = Number(param2);
        if (!isNaN(parsedParam2)) {
            result *= parsedParam2;
        }
    }

    if (typeof param3 === 'number') {
        result *= param3;
    } else if (typeof param3 === 'string') {
        let parsedParam3: number = Number(param3);
        if (!isNaN(parsedParam3)) {
            result *= parsedParam3;
        }
    }

    console.log(result);
}

OptionalMultiplier(undefined, 2, 3)

