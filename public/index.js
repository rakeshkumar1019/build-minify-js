function sum(var1, var2) {
    return var1 + var2
}
//this is test comments
const info = (name) => {
    const age = sum(10, 14)
    const profession = "Software Engineer"
    const message = `Hello ${name}, you are ${age} years old and you are a ${profession}`
    console.log(message)
}
info("Rakesh Kumar Singh")

const helper = () => {
    const name = "Rakesh Kumar Singh"
    const address = {
        streetNo: "4-53",
        city: "HYD",
        country: "IND"
    }
    console.log("*******************************************")
    console.log(`Hello ${name}!`)
    console.log(`Address Details`)
    console.log(`Street No: ${address.streetNo}`)
    console.log(`City: ${address.city}`)
    console.log(`Country: ${address.country}`)
    console.log("*******************************************")
}
helper()