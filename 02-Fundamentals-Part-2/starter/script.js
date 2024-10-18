'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("I can Drive!");

// const interface = 'Audio';
// const private = 100;

function logger(){
    console.log("My name is Mayank");
}

// // calling, running, invoking
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num); 

//! Hoisting
// Function declaration
// function calculateAge1(birthYear){
//    return 2040 - birthYear;
// }
// const age1 = calculateAge1(2000);

// // Function expression
// const calculateAge2 = function (birthYear){
//     return 2040 - birthYear;
// }
// const age2 = calculateAge2(2000);

// console.log(age1, age2);

// Arrow Function
// const calculateAge3 = birthYear => 2040 - birthYear;
// const age3 = calculateAge3(2000);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2040 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(2000, 'Mayank'));
// console.log(yearsUntilRetirement(1990, 'Bob'));

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 4));