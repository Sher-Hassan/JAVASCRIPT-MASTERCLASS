// console.log("S")
// console.log("H")
// console.log("E")
// console.log("R")
// console.log("H")
// console.log("A")
// console.log("SS")
// console.log("AN")

function sayMyName() {
    console.log("S")
    console.log("H")
    console.log("E")
    console.log("R")
    console.log("H")
    console.log("A")
    console.log("SS")
    console.log("AN")

}

// sayMyName();

function addTwoNumbers(n1, n2) {
    // let num1 = n1;
    // let num2 = n2;
    // let sum = num1 + num2;
    // console.log(sum);
    return n1 + n2;
    console.log("Hello World"); // This line will not be executed
}

const result = addTwoNumbers(10, 20);
// console.log(result);

function loginUserMessage(username = "default") {
    if(!username) {
        console.log("Please provide a username");
        return;
    } 
    return `Welcome ${username}`;
}

let msg = loginUserMessage("John");
console.log(msg);
