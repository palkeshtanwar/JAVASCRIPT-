const user = {
    userName : "Palkesh",
    price: 999,

    WelcomeMessage: function() {
        console.log(`${this.userName}, Welcome to Website`)
    }

}
// user.WelcomeMessage()
// user.userName = "Tanwar's"
// user.WelcomeMessage()

// function chai() {
//     let username = "Palkesh"
//     console.log(this.username)
// }

// chai()

//  let chai = function() {
//     let username = "Palkesh"
//     console.log(this.username)
// }

// chai()
// ARROE FUNCTION
//  let chai = () => {
//     let username = "Palkesh"
//     console.log(this.username)
// }

// chai()

//  let add = (num1, num2) => {
//     return num1+num2
// }

// console.log(add(4,5))

// IMPLICITE & EXPLICITE RETURN
 let add = (num1, num2) => num1+num2


console.log(add(4,5))

 let add2 = (num1, num2) =>( num1+num2)


console.log(add(4,5))

