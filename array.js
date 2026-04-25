//ARRAY => multiple value in single variable

const arr = [1,2,3,true,"Palkesh"]

// console.log(arr[2]);

// ARRAY METHODES 

arr.push("Tanwar"); // => add value
console.log(arr)

arr.pop() // => remove last value
// console.log(arr)



arr.unshift("hello") // => add value in starting
// console.log(arr)

arr.shift() // => remove at starting
// console.log(arr)

// console.log(arr.includes(3)) // => find value exixt in array or not

// console.log(arr.indexOf("Palkesh")) // find index value of array

const newArr = arr.join() // => change into string
// console.log(newArr)

// SLICE AND SPLICE

const myArr1 = arr.slice(1,4) // => 
console.log(myArr1)

const myArr2 = arr.splice(1,4) // =>
console.log(myArr2)

//

const list1 = ["abhi","rohit", "virat", "sachin"]

const list2 = ["gill", "sai", "vaibhav", "jaisval"]

// list1.push(list2)

console.log(list1)

const allPlayers = list1.concat(list2)

console.log(allPlayers)

const allNewPlayers = [...list1, ...list2] // spred operator 

console.log(allNewPlayers)

// 

const another_arr = [1,2,3, [4,5,6], [6,7,[8,9,10]]]

const real_arr = another_arr.flat(Infinity)

console.log(real_arr)

console.log(Array.from("Palkesh"))