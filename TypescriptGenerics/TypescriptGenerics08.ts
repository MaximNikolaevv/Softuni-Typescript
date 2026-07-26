// =======================================================
// 8) TYPE INFERENCE
// ========================================================



function wrap<T>(value:T):T {

    return value;

}



const numberResult = wrap(500);


// TypeScript сам разбира:
//
// T = number



const carResult = wrap({

    brand:"BMW",
    year:2007

});


// TypeScript разбира:
//
// T = {
//
//    brand:string;
//    year:number;
//
// }
