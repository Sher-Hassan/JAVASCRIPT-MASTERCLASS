const score = 400;
console.log(score);

// explicitly define the type of variable

const balance = new Number(100);
console.log(balance); // [Number: 100]
console.log(balance.toString()); // 100
console.log(balance.toFixed(2)); // 100.00

const othernum = 56.8765;
console.log(othernum.toPrecision(3)); // 56.9