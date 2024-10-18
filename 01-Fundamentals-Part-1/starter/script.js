// const firstName = "Mayank";
// const job = "Developer";
// const birthYear = 2000;
// const year = 2040;

// const mayank = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(mayank);

// const mayankNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(mayankNew);

// console.log("String with \n\
//     multiple \n\
//     lines \n\
//     ");

// console.log(`String
//     mutiple
//     lines
//     `); 

// const age = 20;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log("Mayank can start driving!");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Mayank is too young. Wait another ${yearsLeft} years.`);
// }

// const birthYear = 2005;
// let century;

// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// Type Conversion and Coercion
// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));

// console.log(Number(inputYear) + 18);
// console.log(Number("Mayank"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old."); // string
// console.log(23 + " is my age."); // string
// console.log('23' - '10'); // number
// console.log('23' - '10' - 3); // number
// console.log('12' * '2'); // number

// let n = '1' + 1; // string -> 11
// n = n - 1; // number -> 10;
// console.log(n); // 10

// Truthy And Falsy Values
// falsy values - 0, "", null, undefined, NaN
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean("Mayank"));
// console.log(Boolean(undefined), Boolean(null));
// console.log(Boolean([]), Boolean({}));

// const money = 100;
// if(money){
//     console.log("Don't spend it all.");
// } else {
//     console.log("Get a Job!");
// }

// let height;
// if(height){
//     console.log("Height is defined");
// } else {
//     console.log("Height is undefined.")
// }

// const age = 18;
// if(age === 18){
//     console.log("Strict Equal Check");
// }

// if(age == '18'){
//     console.log("Type cooercion check!");
// }

// const favourite = prompt("What is your fav number?");
// console.log(favourite, typeof favourite);

// Boolean Logic
// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasGoodVision);

// const isTired = true;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

// if(shouldDrive) console.log("Should Drive.");
// else console.log("Someone else should drive...");

// Switch Statement
// const day = 'sunday';

// switch(day){
//     case 'monday': // day === 'monday
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log("Prepare theory videos");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write coding examples");
//         break;
//     case 'friday':
//     case 'saturday':
//         console.log("Record Videos");
//         break;
//     case 'sunday':
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid date");
//         break;
// }

// Statement and Expressions
// Expression - creates a value
// 3 + 4;
// 1991;
// true && false && false;

// // statement - does not produce a value
// if(23 > 10){
//     const str = '23 is greater than 10';
// }

// console.log(`I'm ${2040 - 2000} years old.`);

// Ternary Operator
const age = 15;
age >= 18 ? console.log("Above 18") : console.log("Below 18");

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}.`); 