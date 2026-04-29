// OBJECT LITERALS 

const sym = Symbol("hello")

const value = {
    name: "PALKESH",
    age: 18,
    [sym]: "Hello world",
    location: "Jaipur"

}

// ACCSESS 

// console.log(value.age);

// console.log(value["name"])
// console.log(value[sym])

// LOCK THE OBJECT

// Object.freeze(value) // => after freez we can't change value of keys

// console.log(value)

// CONSTRUCTOR

const tinder = new Object() // => singleton object

const tinder2 = {} // => non singleton


console.log(tinder2)

tinder.id = "abc123";
tinder.name = "Lambo";
tinder.isLoggedIn = false;

console.log(tinder)

// MEARG OF OBJECTS 

obj1 = {1: "a", 2: "b"}
obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
const obj4 = Object.assign({},obj1, obj2)
const obj5 = {...obj1, ...obj2} // => spred operator 

console.log(obj4)
console.log(obj5)

// OBJECTS IN ARRAY 

const user = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "G@gmail.com"
    },
    {
        id: 3,
        email: "K@gmail.com"
    },
    {
        id: 4,
        email: "A@gmail.com"
    },
]

user[1].email

console.log(Object.keys(value))
console.log(Object.values(value))
console.log(Object.entries(value))