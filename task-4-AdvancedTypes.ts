function operator(
    param: string | number | string[],
    operation: 'Index' | 'Length' | 'Add',
    operand?: number
): void {

    let result: string | number = 0;

    switch (operation) {
        case 'Index':
            if (typeof param === 'string' || Array.isArray(param)) {
                result = param[operand as number];
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
                result = numericParam + (operand as number);
            }
            break;
    }

    console.log(result);
}

operator(['First', 'Second', 'Third'], 'Index', 1); // "Second"



