// DATE AND TIME IN JAVA SCRIPT 
// let myDate = new Date() // => type = object
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())

// TIME

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate)

newDate.toLocaleString(`default`,{
    weekday: "long"
})