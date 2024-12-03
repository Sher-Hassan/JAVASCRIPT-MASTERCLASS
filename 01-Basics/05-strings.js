const name = "sher";
const repoCount = 19;

console.log(name + " has " + repoCount + " repositories"); //concatenation

//but use placeholders with backticks for better readability

console.log(`${name} has ${repoCount} repositories`); //placeholders

console.log(name[0]); //s
console.log(name[1]); //h

console.log(name.length); //4
console.log(name.charAt(0)); //s
console.log(name.charAt(1)); //h

const newstring = name.substring(0, 2); //sh
console.log(newstring);

const newstring2 = name.slice(0, 2); //sh
console.log(newstring2);

const newstring3 = "        khan"
console.log(newstring3.trim()); //khan

const url = "https://www.google.com/sher%20hassan";
url.replace("%20", "-");
console.log(url.replace("%20", "-")); //https://www.google.com/sher%20hassan

console.log(url.includes("sher")); //true

//split (converts string to array)

let newnewstring = "sher-hassan-khan";
console.log(newnewstring.split("-")); //[ 'sher', 'hassan', 'khan' ]