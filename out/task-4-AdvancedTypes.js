"use strict";
function operator(param, operation, operand) {
    let result = 0;
    switch (operation) {
        case 'Index':
            if (typeof param === 'string' || Array.isArray(param)) {
                result = param[operand];
            }
            break;
        case 'Length':
            if (typeof param === 'string' || Array.isArray(param)) {
                result = param.length;
            }
            break;
        case 'Add':
            if (typeof param === 'string' || typeof param === 'number') {
                const numericParam = typeof param === 'string' ? parseInt(param, 10) : param;
                result = numericParam + operand;
            }
            break;
    }
    console.log(result);
}
operator(['First', 'Second', 'Third'], 'Index', 1); // "Second"
//# sourceMappingURL=task-4-AdvancedTypes.js.map