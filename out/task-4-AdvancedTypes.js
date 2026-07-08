"use strict";
function Operator(param, operation, operand) {
    let result = 0;
    ((operation === 'Index' && (typeof param === 'string' || Array.isArray(param))) ? result = param[operand] : null);
    (operation === 'Length' && (typeof param === 'string' || Array.isArray(param)) ? result = param.length : null);
    if (operation === 'Add' && (typeof param === 'string' || typeof param === 'number')) {
        const result = typeof param === 'string' || typeof param === 'number'
            ? param + operand
            : NaN;
        console.log(result);
        return;
    }
    console.log(result);
}
Operator(['First', 'Second', 'Third'], 'Index', 1);
//# sourceMappingURL=task-4-AdvancedTypes.js.map