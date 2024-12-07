//Falsy

// 0, null, undefined, '', NaN, false, -0, Bigint 0n

//Truthy

// "0", '0', "false", " "(space), {}, [], function()

// To check array is empty or not

const array = [];

if(array.length === 0){
    console.log('Array is empty');
}else(
    console.log('Array is not empty')
)

//To check object is empty or not

let obj = {};

if(Object.keys(obj).length === 0){
    console.log('Object is empty');
}

// false == 0 true
//false == '' true
// 0 == '' true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 10; // 10
// val1 = null ?? 10 ?? 20; // 10

console.log(val1);

//if the value is null or undefined then it will return the right side value otherwise it will return the left side value.

// Ternary Operator
// condition ? true : false;

let age = 20;
age >= 10 ? console.log('You are eligible') : console.log('You are not eligible');