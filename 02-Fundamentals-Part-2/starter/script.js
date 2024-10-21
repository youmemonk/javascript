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

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 4));

// const calculateAge = function(birthYear){
//     return 2040 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calculateAge(birthYear);
//     const retirement = 65 - age;
//     // return `${firstName} retires in ${retirement} years`;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(2000, 'Mayank'));
// console.log(yearsUntilRetirement(1950, 'Mayank'));

// const friends = ["Friend1", "Friend2", "Friend3"];
// const years = new Array(1991, 1992, 1993, 1994, 1995);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'NewFriend';
// console.log(friends);

// // friends = [1, 2, 3];
// // console.log(friends);

// const firstName = "Mayank";
// const mayank = [firstName, 'Ukey', 2040 - 2000, friends];
// console.log(mayank);

// const calculateAge = function(birthYear){
//     return 2040 - birthYear;
// }

// const years = [1990, 1995, 2000, 2005, 2010];
// const age1 = calculateAge(years[0]);
// const age2 = calculateAge(years[1]);
// const age3 = calculateAge(years[2]);
// const age4 = calculateAge(years[3]);
// const age5 = calculateAge(years[4]);

// const ages = [age1, age2, age3, age4, age5];
// console.log(ages);

// Methods on Array
// add
// const friends = ["Friend1", "Friend2", "Friend3"];
// const newLength = friends.push("friends4");
// console.log(friends, newLength)

// friends.unshift("friends0");
// console.log(friends);

// // remove
// const popped = friends.pop(); //last
// console.log(friends, popped);

// friends.shift(); // first
// console.log(friends);

// console.log(friends.indexOf("Friend1"));

// console.log(friends.includes("Bob"));
// console.log(friends.includes("Friend1"));

// Objects
const mayank = {
    firstName: "Mayank",
    lastName: "Ukey",
    birthYear: 2000,
    age: 24,
    job: "Teacher",
    friends: [1, 2, 3],
    hasDriversLicense: false,
    calculateAge: function(){
        // console.log(this);
        this.age = 2040 - this.birthYear;
        return this.age;
    }
};

// console.log(mayank);
// console.log(mayank['age']);

// const input = prompt("What do you want to know?");
// console.log(mayank[input]);

// if(mayank[input]){
//     console.log(mayank[input]);
// } else {
//     console.log("Wrong request");
// }

// mayank.location = "Nagpur";
// mayank['twitter'] = "mayank";
// mayank.friend = "ABCD";
// console.log(mayank);

// console.log(`${mayank.firstName} has ${mayank.friends.length}, and his best friend is called ${mayank.friend}.`)

// console.log(mayank.calculateAge());
// // console.log(mayank['calculateAge']());
// console.log(mayank.age);
// console.log(mayank.age);

// //
// console.log(`${mayank.firstName} is a ${mayank.age}-year old ${mayank.job}, and he has ${mayank.hasDriversLicense ? 'a' : 'no'} driver's license.`);

// for(let i = 1; i <= 10; i++){
//     console.log(`Lifting weights repetition ${i}`);
// }

// const friends = ["Friend1", "Friend2", "Friend3", 2040 - 2000, false, true];
// const types = [];

// for(let i = 0; i < friends.length; i++){
//     console.log(friends[i]);
//     // types[i] = typeof friends[i];
//     types.push(typeof friends[i]);
// }

// console.log(types);

// const years = [1990, 1995, 2000, 2005, 2010];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//     ages.push(2040 - years[i]);
// }
// console.log(ages);

// for(let i = 0; i < friends.length; i++){
//     if(typeof friends[i] !== 'string') continue;

//     console.log(friends[i], typeof friends[i]);
// }

// for(let i = friends.length - 1; i >= 0; i--){
//     console.log(i, friends[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`----- Starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Lifting weights repeatition ${rep}`);
//     }
// }

// let rep = 1;
// while(rep <= 10){
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if(dice === 6) console.log("Loop is about to end...");
// }