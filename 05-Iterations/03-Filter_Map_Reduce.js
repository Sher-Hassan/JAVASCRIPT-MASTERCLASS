//filter

const numbers = [1, -1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = numbers.filter( (item) => item > 4 )

const filtered2 = numbers.filter((item) => { return item > 4; });

console.log(filtered);
console.log(filtered2);