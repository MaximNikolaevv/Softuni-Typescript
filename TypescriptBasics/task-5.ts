function UnknownResponse(params: { code: number; text: string; value: (string | number)[] }): void {

    if (typeof params === 'object' && params !== null) {

        if (typeof params.value === 'string') {

            console.log(params.value);
        }

    } else {

        console.log("-");
    }

}

UnknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] });