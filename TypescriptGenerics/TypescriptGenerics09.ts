// =======================================================
// 9) GENERIC FUNCTIONS
// =======================================================



function identity<T>(value: T): T {


    return value;


}



const nameResult = identity("Max");


// T = string
//
// return type = string



const ageResult = identity(19);


// T = number
//
// return type = number