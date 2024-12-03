let score = 33
let stringscore = "33"
console.log(typeof score) // number
console.log(typeof (score + "")) // string

let valueInNumber = Number(stringscore) // Converts to number
console.log(typeof valueInNumber) // number

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn) // Converts to boolean
console.log(typeof booleanIsLoggedIn) // boolean

let num = 43;
let numInString = num.toString() // Converts to string
let numInString2 = String(num) // Converts to string
console.log(typeof numInString) // string
console.log(typeof numInString2) // string