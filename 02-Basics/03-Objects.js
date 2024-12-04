// Singleton

// Singleton is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

// In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code from the global namespace so as to provide a single point of access for functions.

// Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

// Singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

// Singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

// Object literals

// Object literals are a simple way to create objects using the literal notation. They allow you to create objects with properties and methods in a single line of code.

// object.create
const symb = Symbol("key1")

const JsUser = {
    "full name": "sher hassan",
    [symb] : "key2", // used as symbol rather than used as string
    name: "sher",
    age: 18,
    email: "sher@gamil.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
};

// Dot notation is used when the property name is a valid identifier (no spaces, special characters, etc.)
console.log(JsUser.name); // sher

// Square bracket notation is used when the property name is not a valid identifier (contains spaces, special characters, etc.)
console.log(JsUser["email"]); // sher@gmail.com

// Square bracket notation is also used when the property name is stored in a variable or is a symbol
console.log(JsUser["full name"]); // sher hassan
console.log(JsUser[symb]); // key2 (string) (used as symbol rather than used as string)

// console.log(symb); 

// console.log(typeof (JsUser[symb])); 

// console.log(JsUser[symb]); // key2 (string) ( used as symbol rather than used as string)

// console.log(typeof symb); // symbol

JsUser.email = "sherhassan@gmail.com"; // Updating the value of email

// If you dont want to change the value of the object then use Object.freeze(objectName)

// Object.freeze(JsUser);
JsUser.name = "sherHassan"; // This will not change the value of name

// console.log(JsUser.name); // sher

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello");
}
JsUser.greeting2 = function() {
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting); // undefined

console.log(JsUser.greeting()); // Hello
console.log(JsUser.greeting2()); // Hello sher
