// const tinderUser = new Object();
const tinderUser = {};

console.log(tinderUser); // {}

// we can add properties to an object

tinderUser.name = "sher";
tinderUser.age = 18;
tinderUser.isLoggedin = false;

// console.log(tinderUser); // { name: 'sher', age: 18, isLoggedin: false }

const regularUser = {
    email: "sher@gmail.com",
    fullname: {
        userfullname: {
            firstName: "sher",
            lastName: "hassan"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName); // sher

console.log(regularUser.fullname?.userfullname.firstName); // ? is used to avoid error if the property is not present

//Combining objects

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj4 = {
    5 : "e",
    6 : "f"
}

const obj3a = {obj1, obj2} // it will create an object with obj1 and obj2 as properties

const obj3b = Object.assign(obj1, obj2) // it will merge obj1 and obj2

const obj3ba = Object.assign({}, obj1, obj2) // The difference between obj3b and obj3ba is that obj3ba will not change the value of obj1 and obj2 and will create a new object with the merged values, the first argument is the target object and the rest are the source objects

const obj3baa = Object.assign({}, obj1, obj2, obj4) // it will merge obj1, obj2 and obj3 and will gaurantee that the original objects are not changed

const obj3 = {
    ...obj1,
    ...obj2
} // it will merge obj1 and obj2 using spread operator and it is the most modern way to merge objects and convenient

// Data from Database

// Most of the time we get data from the database in the form of objects and arrays

const users = {
    1: {
        name: "sher",
        age: 18
    },
    2: {
        name: "hassan",
        age: 19
    },
    3: {
        name: "khan",
        age: 20
    }
}

console.log(users[1].name); // sher

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'name', 'age', 'isLoggedin' ] and datatype is array which is very useful and important to use keys 


console.log(Object.values(tinderUser)); // [ 'sher', 18, false ] 

console.log(Object.entries(tinderUser)); // [ [ 'name', 'sher' ], [ 'age', 18 ], [ 'isLoggedin', false ] ] it will return an array of arrays

// When we are looping through and we are looking for a property but it doesnot exists so it can crash the program so we can use the following method to avoid the crash

console.log(tinderUser.hasOwnProperty("name")); // true

console.log(tinderUser.hasOwnProperty("email")); // false


