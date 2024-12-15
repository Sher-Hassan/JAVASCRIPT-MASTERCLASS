const arr = [9,8, 7, 6, 5, 4, 3, 2, 1];


// const myTotal = arr.reduce((acc, curr) => { return acc + curr; }, 0);
// console.log(myTotal);

// const myTotal = arr.reduce((acc, curr) => { return acc * curr; }, 10);
// console.log(myTotal);

const cart = [
    {
        item: "Laptop",
        price: 1000
    },
    {
        item: "Mouse",
        price: 50
    },
    {
        item: "Keyboard",
        price: 150
    },
    {
        item: "Monitor",
        price: 200
    }
]

let priceToPay = cart.reduce((acc, item) => { return acc + item.price }, 0)
console.log(priceToPay);