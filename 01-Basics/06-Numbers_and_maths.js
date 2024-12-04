const score = 400;
// console.log(score);

// explicitly define the type of variable

const balance = new Number(100);
// console.log(balance); // [Number: 100]
// console.log(balance.toString()); // 100
// console.log(balance.toFixed(2)); // 100.00

const othernum = 56.8765;
// console.log(othernum.toPrecision(3)); // 56.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-PK'));

//+++++++++++++ Maths ++++++++++++++


// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-4.7)); // 4.7
// console.log(Math.ceil(4.4)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.round(4.7)); // 5
// console.log(Math.round(4.4)); // 4
// console.log(Math.sqrt(64)); // 8
// console.log(Math.cbrt(64)); // 4
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
// console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150
// console.log(Math.random()); // 0.123456789 (Random from 0 to 1)
// console.log(Math.random() * 10); // 1.23456789 (Random from 0 to 10)
// console.log((Math.random() * 10) + 1);// (+1 to avoid 0)
// console.log((Math.random() * 10) + 1); // (+1 to avoid 0)
// console.log(Math.floor(Math.random() * 10) + 1); // Random from 1 to 10

// Defining min and max value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min)) + min);