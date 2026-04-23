// STRING 

const name = "Palkesh"

const lastName = " Tanwar"

console.log(name+lastName)

console.log(`Hello my name is ${name} and my last name is ${lastName}`);

const name2 = new String(`Palkesh`)

console.log(name2[1])
console.log(name2.toUpperCase())
console.log(name2.charAt(5)) // by position
console.log(name2.indexOf('k')) // by words


// SUB STRING 
const newString = lastName.substring(0, 4)

console.log(newString)

// SLICE
const newString2 = lastName.slice(0, -5)

console.log(newString2)

//TRIM => REMOVE EXTRA SPECES

const newString3 = "   JAVA SCRIPT   "

console.log(newString3.trim())