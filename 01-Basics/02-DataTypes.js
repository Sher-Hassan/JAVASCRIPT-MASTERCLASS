"use strict" // treat all JS code as newer version

let name = "sher"
let age = 18
let isLoggedIn = true
let price = 19.99
let state = null

// object

console.log(typeof name)

console.log(typeof null) // object

//primitive data types
// string, int, boolean, null, undefined, symbol, bigint

// In primitive data we get a copy and the origiona value is not changed

let name2 = name
name2 = "sherHassan"
console.log(name, name2) // sher sherHassan
//name is not changed

//non-primitive data types
// object, array, function
let obj = {
    name: "sher",
    age: 18
}
