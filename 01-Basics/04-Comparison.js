console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

console.log("2" > 1); // true
console.log("2" < 1); // false

console.log(null == undefined); // true
console.log(null > 0); // false
console.log(null >= 0); // true

const myFunction = function() {
    console.log("Hello");
}

console.log(typeof myFunction); // [Function: myFunction]

// ++++++++++++++++++++++++++++++++++==
// Stack (primitive), Heap (non-primitive)

let myYtname = "leo";
let myYtname2 = myYtname;
myYtname2 = "leoMessi";
console.log(myYtname, myYtname2); // leo leoMessi

//primitive data types
// string, int, boolean, null, undefined, symbol, bigint

// In primitive data we get a copy and the origiona value is not changed
let name = "sher"
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

let obj2 = obj
obj2.name = "sherHassan"
console.log(obj.name, obj2.name) // sherHassan sherHassan'

// In non-primitive data types we get a reference and the original value is changed

