function calculetcartPrice(...num1) {
    return num1
}
console.log(calculetcartPrice(200,400,500))

const user = {
      username : "Palkesh",
      price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const arr = [200, 400, 600]

function returnValue(getarray) {
    return getarray[2]
}
console.log(returnValue(arr))