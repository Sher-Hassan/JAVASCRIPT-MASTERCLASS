

if (true){
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a); // This will throw an error and it is beneficial because it will help you to avoid bugs
console.log(b); // This will throw an error and it is beneficial because it will help you to avoid bugs
console.log(c);  // This will not throw an error because var is function scoped and not block scoped and it is not a good practice to use var