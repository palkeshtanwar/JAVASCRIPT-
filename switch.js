// const month = 7

// switch (month) {
//     case 1:
//         console.log("January");
        
//         break;
//     case 2:
//         console.log("Febuary");
        
//         break;
//     case 3:
//         console.log("March");
        
//         break;
//     case 4:
//         console.log("Apirl");
        
//         break;
//     case 5:
//         console.log("May");
        
//         break;
//     case 6:
//         console.log("June");
        
//         break;
//     case 7:
//         console.log("July");
        
//         break;
//     case 8:
//         console.log("August");
        
//         break;

//     default:
//         console.log("default value");
        
//         break;
// }

// falsy value 

// false ,0, -0, bigint 0n, "", null, undefined, not a number

// truthy value

// "0", "false", " ", [], {}, function(){}, 
// NULLISH COALESCING OPERATOR (??) => NULL UNDEFINED

let val1 ;
let val2 ;
let val3 ;
let val4 ;

val1 = null ?? 10
val2 = undefined ?? 10
val3 = 7 ?? 10
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//  Terniary Operator 

// condition ? true : false

const price = 100

price >= 80 ? console.log("less then 80") : console.log("more then 80")

