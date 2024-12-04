// array

// We can store multiple values in a single variable using arrays they can be of different types
const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, true, "sher", 3.14, null, undefined, [1, 2, 3], { name: "sher" }, function() { console.log("hello") }];
const myArr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, true, "sher"];
//OR
const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, true, "sher", 3.14, null, undefined, [1, 2, 3], { name: "sher" }, function() { console.log("hello") });

// JS arrays are zero-indexed
// JS arrays are resizable unlike arrays of c++ we use vectors in c++ to resize arrays

// console.log(myArr[0]); // 0
// console.log(myArr[16]); // [Function (anonymous)]

// Shallow copy and deep copy
// Shallow copy is when we copy the reference of the array and the original array is changed so basically they share the same memory and common reference

// Deep copy is when we copy the values of the array and the original array is not changed so they do not share the same memory and reference

// Array Methods

// myArr.push(10); // Adds an element at the end of the array
// console.log(myArr);
// myArr.pop(); // Removes the last element of the array
// console.log(myArr);
// myArr.unshift(-1); // Adds an element at the start of the array
// console.log(myArr);
// myArr.shift(); // Removes the first element of the array
// console.log(myArr);
// console.log(myArr.includes(3)); // true
// console.log(myArr.includes(11)); // false
// console.log(myArr.indexOf(3)); // 3
// console.log(myArr.indexOf(17)); // -1 // If the element is not found it returns -1
// console.log(myArr.reverse()); // Reverses the array

// const newArr = myArr.slice(0, 5); // Slices the array from 0 to 5
// // console.log(newArr);
// const newArr2 = myArr.slice(5); // Slices the array from 5 to end
// // console.log(newArr2);
// const newArr3 = myArr.slice(); // Slices the whole array
// // console.log(newArr3);

// const newArr2 = [23, 45, 67, 89]
// newArr2.join(myArr3); // Joins the array with the given separator but it converts the array to string and it joins each element of first array with the second array individually
// console.log(newArr2.join(myArr3));

// Slice and Splice

// console.log("A", myArr);

const myn1 = myArr.slice(1, 4); // from 1 to 3 and 4 will not be included
// console.log("B", myn1);
const myn2 = myArr.splice(1, 4); // from 1 to 3 and 4 will be included and the original array will be changed

console.log("A", myArr);
console.log("B", myn2);

