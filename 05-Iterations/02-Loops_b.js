// for of

// ["", "", ""] 
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5];

// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "hello world!";
// for (const greet of greetings) {
//     console.log(`The letter is: ${greet}`);
    
// }

// Maps

const map = new Map();
map.set("name", "John Doe");
map.set("occupation", "Software Developer");
map.set("country", "USA");
map.set("age", 30);
map.set("isMarried", false);
// console.log(map); //Map(5) {"name" => "John Doe", "occupation" => "Software Developer", "country" => "USA", "age" => 30, "isMarried" => false} 

for (const [key, value] of map) {
    // console.log(key, value);
}

const myObj = {
    "game1": "Soccer",
    "game2": "Basketball",
    "game3": "Tennis",
    "game4": "Baseball"
}

// for (const [key, value] of myObj) {
//     console.log(key, value);
// } //TypeError: myObj is not iterable

// There are other ways to iterate objects

// for (const key in myObj) {
//     console.log(key);
//     console.log(myObj[key]);
//     console.log(`${key}: ${myObj[key]}`);
// }

// Can for in be used to iterate arrays?

const myArr = ["js", "python", "java", "c++", "ruby", "php"];

for (const key in myArr) {
    // console.log(key); //0, 1, 2, 3, 4, 5
    // console.log(myArr[key]); //js, python, java, c++, ruby, php
}
// Arrays also have keys that start from 0

// can forin be used to iterate maps?

for (const key in map) {
    console.log(key);
    console.log(map[key]);
} //It will not work because maps are not objects. They are iterable objects. 

// for each

// for each on arrays

// myArr.forEach( (e) => { 
//     console.log(e)
//  } )

// function printMe(item){
//     console.log(item);
// }

// myArr.forEach(printMe); 

myArr.forEach( (item, index, arr) => { 
    // console.log(item, index, arr);
 } )

 //forEach can accept three arguments: item, index, and the array itself.

 const myArr2 = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Jim", age: 40},
    {name: "Joe", age: 35}
 ]

//  myArr2.forEach((item) => { 
//     console.log(item.name, item.age);
//   })


 myArr2.forEach((item) => { 
    // console.log(item.name, item.age);
    for (const key in item) {
        console.log(key);
        console.log(item[key]);
    }
  })

