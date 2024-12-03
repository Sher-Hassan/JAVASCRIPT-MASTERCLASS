let score = 33
let stringscore = "33"
// console.log(typeof score) // number
// console.log(typeof (score + "")) // string

let valueInNumber = Number(stringscore) // Converts to number
// console.log(typeof valueInNumber) // number

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn) // Converts to boolean
// console.log(typeof booleanIsLoggedIn) // boolean

let num = 43;
let numInString = num.toString() // Converts to string
let numInString2 = String(num) // Converts to string
// console.log(typeof numInString) // string
// console.log(typeof numInString2) // string

// ********* Operations *********

let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(3 + 4); // 7
// console.log(3 - 4); // -1
// console.log(3 * 4); // 12
// console.log(3 / 4); // 0.75
// console.log(3 % 4); // 3
// console.log(3 ** 4); // 81

let str1 = "hello";
let str2 = "world";

let str3 = str1+str2;
// console.log(str3); // helloworld

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log(1 + 2); // 3   
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 3); // 123
// console.log(1 + 2 + "3"); // 33

// console.log(true);
// console.log(false);
// console.log(!true);
// console.log(+true);


let num1, num2, num3, num4, num5, num6, num7, num8, num9, num10;

num1 = num2 = num3 = num4 = num5 = num6 = num7 = num8 = num9 = num10 = 3;

console.log(num6) //3

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter); //101