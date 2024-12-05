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

// let msg = loginUserMessage("John");
// console.log(msg);

// if number of parameters are umknown then use rest operator which means it will take all the parameters and put them in an array

function AllNumbers(...numbers) {
    return numbers
}

// console.log(AllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function AllNumbers2(val1, val2, ...num){
    return num
} // IN this case val1 and val2 will be assigned to the first two values and the rest of the values will be put in an array and assigned to num

console.log(AllNumbers2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]

//  Using objects in functons

const user = {
    name: "John",
    age: 30
}

function handleObject(obj){
    // console.log(`Hello ${obj.name}, you are ${obj.age} years old`);
}

handleObject(user);
//or
handleObject({
    name: "Jane",
    age: 25
});

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnSecondElement(myarr){
 return myarr[1];   
}

console.log(returnSecondElement(arr)); // 2