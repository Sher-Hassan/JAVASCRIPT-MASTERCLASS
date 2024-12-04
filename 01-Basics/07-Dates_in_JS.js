// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth()); // Month starts from 0
// console.log(myDate.getMonth() + 1); // So we can add 1 to clear confusion
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getTime());

// console.log(typeof myDate); //object
// let myCreatedDate = new Date(2024, 2, 23); // Months start from 0
// let myCreatedDate = new Date(2024, 2, 23, 5, 4);
// let myCreatedDate = new Date("2024-02-23");
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString());

// Time Stamps

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1632825944974 (milliseconds)
// console.log(Math.floor(Date.now() / 1000)); // 1632825944 (seconds)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))


// We can fully customize the date format using toLocaleDateString() method
let newDate = new Date();
newDate.toLocaleDateString('default', {
    weekday: 'long'
    // year: 'numeric',
    // month: 'long',
    // day: 'numeric'
    //etc.
})