function ConvertArrays(arr1: (string | number)[]): void {


    let joinedString: string = arr1.join('');

    const arrayNumber: number = joinedString.length;

    console.log([joinedString, arrayNumber]);

}

ConvertArrays(['How', 'are', 'you?']);