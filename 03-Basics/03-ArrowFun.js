const user = {
    name: 'John',
    price: 100,

    welocomeMessage: function() {
        console.log(`Hello ${this.name}, you have to pay ${this.price}`);
        console.log(this);
    }
}

// user.welocomeMessage(); // This will return "Hello John, you have to pay 100"
// user.name = 'Sher';
// user.price = 200;
// user.welocomeMessage(); // This will return "Hello Sher, you have to pay 200"
// console.log(this); // This will return the global object

// Arrow function

// const user2 = function() {
//     let username = 'John';
//     console.log(this.username); // This will return undefined because arrow function does not have its own this keyword
// }

// As an Arrow function

const user2 = () => {
    let username = 'John';
    console.log(this.username); // This will return undefined because arrow function does not have its own this keyword
}

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(5, 10)); // This will return 15

//Arrow function by implicit return

const addThree = (num1, num2) => num1 + num2; // OR
const addFour = (num1, num2) => num1 + num2; //This does not need a return keyword

// How to return an object in an arrow function

const user3 = () => ({name: 'John', age: 30});// This will return an object and it is important to wrap the object in parentheses
