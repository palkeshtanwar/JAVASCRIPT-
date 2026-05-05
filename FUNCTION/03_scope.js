let a = 10
const b = 20
// var c = 30

if (true) {
    let a = 10
    const b = 20
    // var c = 30
}
// IN CURLY BRACES THE SCOPE IS LOCAL SCOPE AND OUTSIDE IS GLOBLE SCOPE
// console.log(a)
// console.log(b)
// console.log(c)

// NESTEB SCOPE =>

// function one() {
//     const user = "Palkesh"

//     function two() {
//         const website = "Youtube"
        // console.log(user);
    // }
    // console.log(website)
//     two()
// }    
// one()

if(true) {
    const user = "Palkesh"
    if(user === "Palkesh") {
        const website = " Youtube"
        console.log(user + website);
    }
    // console.log(website);
}

// console.log(user);

// IMPORTENT => 
console.log(addone(6)) // IN THIS TYPE WE CALL FUNCTION BEFORE EXECUTION
function addone(num) {
    return num+1
} ;   

const addTwo = function(num) { // IN THIS TYPE WE CAN'T
    return num+2
}

console.log(addTwo(6))