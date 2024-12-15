//For

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// // }


//     for(let i =0; i<=10; i++){
//         let line = "";
//         for(let j=0; j<i; j++){
//             line += "*";
//         }
//         console.log(line);
//     }

for(let i = 1; i<=10; i++){
    // console.log("table of " + i);
    for(let j = 0; j<=10; j++){
        // console.log(i + " * " + j + " = " + i*j);
    }
    // console.log(" ");
}

// for (let index = 0; index <=20; index++) {
//     if(index == 5){
//         console.log("Dectected 5");
//         break; //break the control flow
//     }
//     console.log("Value of i is: " + index);
// }


for (let index = 0; index <=20; index++) {
    if(index == 5){
        // console.log("Dectected 5");
        continue; //skip the current iteration, it ignores the rest of the code in the loop and moves to the next iteration like if there is a foul in a game, the game will continue by giving advantage to the other team.
    }
    // console.log("Value of i is: " + index);
}

//While
// while(2==2){
    //     // console.log("This will run forever");
    //     break;
    //  }
// let index2 = 0;
// while(index2 <= 10){
//     console.log("Value of i is: " + index2);
//     index2= index2 + 2;
// }

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = 0;
while(arr < myArray.length){
    // console.log(myArray[arr]);
    arr++;
}

//Do While

// let score = 1

// do{
//     console.log("Score is " + score);
//     score++;
// }while(score <= 10);

// What if score is greater than 10? or if the condition is false? It will still run the code once and then check the condition. If the condition is false, it will not run the code again.

let score = 11

do{
    console.log("Score is " + score);
    score++;
}while(score <= 10);

