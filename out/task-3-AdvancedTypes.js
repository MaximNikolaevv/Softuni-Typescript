"use strict";
function OptionalMultiplier(param1, param2, param3) {
    let result = 1;
    if (typeof param1 === 'number') {
        result *= param1;
    }
    else if (typeof param1 === 'string') {
        let parsedParam1 = Number(param1);
        if (!isNaN(parsedParam1)) {
            result *= parsedParam1;
        }
    }
    if (typeof param2 === 'number') {
        result *= param2;
    }
    else if (typeof param2 === 'string') {
        let parsedParam2 = Number(param2);
        if (!isNaN(parsedParam2)) {
            result *= parsedParam2;
        }
    }
    if (typeof param3 === 'number') {
        result *= param3;
    }
    else if (typeof param3 === 'string') {
        let parsedParam3 = Number(param3);
        if (!isNaN(parsedParam3)) {
            result *= parsedParam3;
        }
    }
    console.log(result);
}
OptionalMultiplier(undefined, 2, 3);
//# sourceMappingURL=task-3-AdvancedTypes.js.map