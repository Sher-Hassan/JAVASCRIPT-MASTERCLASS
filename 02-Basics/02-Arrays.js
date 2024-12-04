const hollywoodStars = ['Tom Cruise', 'Angelina Jolie', 'Brad Pitt', 'Jennifer Aniston', 'Leonardo DiCaprio'];
const bollywoodStars = ['Shah Rukh Khan', 'Amitabh Bachchan', 'Salman Khan', 'Aamir Khan', 'Deepika Padukone'];

// hollywoodStars.push(bollywoodStars); // Adds an element at the end of the array thus it does not merges the array but adds the array as a single element and creates mess

// console.log(hollywoodStars) // [ 'Tom Cruise', 'Angelina Jolie', 'Brad Pitt', 'Jennifer Aniston', 'Leonardo DiCaprio', [ 'Shah Rukh Khan', 'Amitabh Bachchan', 'Salman Khan', 'Aamir Khan', 'Deepika Padukone' ] ]

// Now to access Shah Rukh Khan we have to use two indexes

// console.log(hollywoodStars[5][0]) // Shah Rukh Khan

const allStars = hollywoodStars.concat(bollywoodStars); // Merges the two arrays and returns a new array

console.log(allStars); // [ 'Tom Cruise', 'Angelina Jolie', 'Brad Pitt', 'Jennifer Aniston', 'Leonardo DiCaprio', 'Shah Rukh Khan', 'Amitabh Bachchan', 'Salman Khan', 'Aamir Khan', 'Deepika Padukone' ]

// Spread operator

const allStars2 = [...hollywoodStars, ... bollywoodStars]; // Merges the two arrays and returns a new array and it is more preffered than concat()

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flatArr = anotherArr.flat(Infinity); // Flattens the array
const flatArr2 = anotherArr.flat(2); // Flattens the array to the given depth

//Converting to array

console.log(Array.isArray("Sher")); // false
console.log(Array.from("Sher")); // [ 'S', 'h', 'e', 'r' ] (converted to array)
console.log(Array.from({name: "Sher"})); // [] (converted to array) (important)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] (converted to array)


