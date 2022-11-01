// const cars = ["tesla", "bmw", "fiat", "audi"];

// const [erti, ori] = cars;

// console.log(erti, ori);


// const player = {
//     name: "Patrik",
//     lname: "Linberg",
//     age: 34
// }

// const {age, lname, name} = player;

// console.log(age, lname);



// let player = {
//     name: "john",
//     age: 33
// }

// let gamer = player;

// console.log(player, gamer);


// let player = {
//     name: "gio",
//     age: 20
// }

// let player2 = {...player}

// player2.age = 25;

// console.log(player, player2);


// let arr1 = [1,2,3,4,5,6];

// let arr2 = [...arr1];

// arr2[3] = 99;

// console.log(arr1, arr2);



// Task 1 --------------------

let array1 = [-3,-8,-60,1,3,6,8,10,12,-23,-87,46,66,88,99];

function favnumbers(num) {
    return num > 0
}

function sumEl(num, ind) {
    return num + ind
}

let numbers1 = array1.filter(favnumbers);
// console.log(numbers1);

let numbersSum = array1.reduce(sumEl);

// console.log(numbersSum);






// task 2 -----------------------------------------------------


