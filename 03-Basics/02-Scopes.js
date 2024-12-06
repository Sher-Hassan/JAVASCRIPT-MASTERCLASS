

if (true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); // This will throw an error and it is beneficial because it will help you to avoid bugs
// console.log(b); // This will throw an error and it is beneficial because it will help you to avoid bugs
// console.log(c);  // This will not throw an error because var is function scoped and not block scoped and it is not a good practice to use var

// nested block scopes

function one(){
    const name = "sher"

    function two(){
        const website = "youtube"
        console.log(name); // This will work because it is in the parent block scope
    }
    // console.log(website); // This will not work because it is in the child block scope
two();
}

one(); 

function addone(num){
    return num + 1;
}
addone(5); // This will return 6

const addtwo = function(num){
    return num + 2;
}