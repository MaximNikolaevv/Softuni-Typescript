function Operator(param: string | number | string[], operation: 'Index' | 'Length' | 'Add', operand?: number) {

    let result: string | number = 0;



    ((operation === 'Index' && (typeof param === 'string' || Array.isArray(param))) ? result = param[operand as number] : null);



    (operation === 'Length' && (typeof param === 'string' || Array.isArray(param)) ? result = param.length : null);



    if (operation === 'Add' && (typeof param === 'string' || typeof param === 'number')) {
        const result = typeof param === 'string' || typeof param === 'number'
            ? (param as number) + (operand as number)
            : NaN;
        console.log(result);
        return;
    }

    console.log(result);

}


Operator(['First', 'Second', 'Third'], 'Index', 1)