// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that is executed immediately after it is created. 

// function DBC() {
//     console.log("DB Connection Established");
// }

// DBC();

//Now, let's convert the above function into an IIFE

(function DBC() {
    console.log("DB Connection Established");
})(); //First, wrap the function in parentheses and then add parentheses at the end of the function, the first wrap is the definition of the function and the second wrap is the invocation of the function and in case of  IIFE semicolon is required at the end of the function.

// IIFE by arrow function

( ()=>{
    console.log("DB Connection Established"); 
})();
// IIFE with parameters
// As we know that the second parentheses are used to invoke the function, so we can pass the parameters in the second parentheses.

(function DBC(name) { // This is named IIFE
    console.log(`DB Connection Established for ${name}`);
})("Sher");

//OR

((name) => {
    console.log(`DB Connection Established for ${name}`);
})("Sher");

