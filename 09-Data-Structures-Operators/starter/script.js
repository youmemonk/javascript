'use strict';

const arr = [1, 2, 3];
const [x, y, z] = arr;

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '10:00',
    address = 'Default Address',
  }) {
    // console.log(obj);
    console.log(
      `Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  //es6
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your pasta with ingredients: ${ing1}, ${ing2} and ${ing3}`
    );
  },
  //es6
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  //es6 enhanced object literals
  openingHours,
};

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(1, 2);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 7]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // OBJECTS
// const { name, openingHours: openinghours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '22 Blecker St',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // Spread Operator
// const array = [7, 8, 9];
// const badNewArr = [1, 2, ...array];
// console.log(badNewArr);
// console.log(...badNewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join two arrays
// const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allMenu);

// // Iterables - strings, map, arrays, sets | not objects
// const str = 'Mayank';
// const letters = [...str, ' ', 'U.'];
// console.log(letters);

// // const ingredients = [
// //   prompt("Let's make Pasta!: Ingredient 1"),
// //   prompt("Let's make Pasta!: Ingredient 2"),
// //   prompt("Let's make Pasta!: Ingredient 3"),
// // ];

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { ...restaurant, founder: 'Tom', foundedIn: '1925' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Risoto Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // Rest Pattern
// // Spread used on right side of = | Rest used on left side of =
// const [first, second, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(first, second, others);

// const [pizza, , risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFoods);

// // Objects
// const { sat, ...weekday } = restaurant.openingHours;
// console.log(sat, weekday);

// // Functions
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
//   return sum;
// };

// add(2, 3);
// add(1, 2, 3, 4, 5);
// add(1);

// const xx = [23, 1, 95];
// add(...xx);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

// // Shortcircuiting
// console.log('-----OR-----');
// console.log(3 || 'Mayank');
// console.log('' || 'Mayank');
// console.log(true || 'Mayank');
// console.log(undefined || 'Mayank');
// console.log(undefined || null);
// console.log(undefined || null || false);
// console.log(undefined || 0 || '' || ' ' || 'hello' || 23 || null);
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests1, guests2);

// console.log('-----AND------');
// console.log(0 && 'Mayank');
// console.log(7 && 'Mayank');

// console.log('Hello' && 23 && null && 'mayank');
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// // NULLISH OPERATOR : null and undefined
// const guests4 = restaurant.numGuests ?? 10;

// const rest1 = { name: 'Caapri', numGuests: 10 };
// const rest2 = { name: 'Popa', numGuests: 2 };
// const rest3 = { name: 'Caapri', owner: 'Giovani' };

// rest1.numGuests = rest1.numGuests || 20;
// rest2.numGuests = rest2.numGuests || 10;

// // OR ASSIGNMENT OPERATOR
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1, rest2);

// // FOR-OF LOOP
// const totalMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of totalMenu) console.log(item);
// for (const [i, el] of totalMenu.entries()) console.log(`${i + 1}: ${el}`);

// console.log(openinghours);

// // without optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // METHODS
// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.risoto?.(0, 1) ?? 'method does not exist');

// // ARRAYS
// // const users = [{ name: 'mayank', email: 'mayank@gmail.com' }];
// const users = [];
// console.log(users[0]?.name ?? 'User array empty');

// // LOOPING OBJECTS: KEYS, VALUES, ENTRIES
// const properties = Object.keys(openinghours);
// for (const day of Object.keys(openingHours)) console.log(day);

// // console.log(`We are open on`)
// console.log(`We are open for ${properties.length} days.`);

// let openStr = '';
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property values
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries)
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);

// ///////////////////////////////////////

// // Coding Challenge #1

// /*

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀

// */

// const game = {
//   team1: 'Bayern Munich',

//   team2: 'Borrussia Dortmund',

//   players: [
//     [
//       'Neuer',

//       'Pavard',

//       'Martinez',

//       'Alaba',

//       'Davies',

//       'Kimmich',

//       'Goretzka',

//       'Coman',

//       'Muller',

//       'Gnarby',

//       'Lewandowski',
//     ],

//     [
//       'Burki',

//       'Schulz',

//       'Hummels',

//       'Akanji',

//       'Hakimi',

//       'Weigl',

//       'Witsel',

//       'Hazard',

//       'Brandt',

//       'Sancho',

//       'Gotze',
//     ],
//   ],

//   score: '4:0',

//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],

//   date: 'Nov 9th, 2037',

//   odds: {
//     team1: 1.33,

//     x: 3.25,

//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const { team1, x: draw, team2 } = game.odds;

// function printGoals(...players) {
//   console.log(players);

//   console.log(`Total Goals scored: ${players.length}`);
// }

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// // printGoals('Davies', 'Muller');

// printGoals(...game.scored);

// team1 > team2 && console.log('Team1 wins!');

// team1 < team2 && console.log('Team2 wins!');

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:

// //       Odd of victory Bayern Munich: 1.33

// //       Odd of draw: 3.25

// //       Odd of victory Borrussia Dortmund: 6.5

// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

// //       {

// //         Gnarby: 1,

// //         Hummels: 1,

// //         Lewandowski: 2

// // }

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// let oddValues = Object.values(game.odds);

// let sumOdd = 0;

// for (const odd of oddValues) {
//   sumOdd += odd;
// }

// const averageOdd = sumOdd / oddValues.length;

// console.log(averageOdd);

// for (const [i, [team, score]] of Object.entries(game.odds).entries()) {
//   console.log(`Odd of ${team !== 'x' ? 'victory ' + team : 'draw'}: ${score}`);
// }

// console.log(game.scored);

// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// // SETS

// const orderSet = new Set([
//   'Pasta',

//   'Pizza',

//   'Pizza',

//   'Risotto',

//   'Pasta',

//   'Pizza',
// ]);

// console.log(orderSet);

// console.log(new Set('Mayank'));

// console.log(orderSet.size);

// console.log(orderSet.has('Bread'), orderSet.has('Pizza'));

// orderSet.add('Garlic Bread');

// orderSet.add('Garlic Bread');

// console.log(orderSet);

// orderSet.delete('Risotto');

// console.log(orderSet);

// // orderSet.clear();

// // console.log(orderSet);

// for (const order of orderSet) console.log(order);
// const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Chef', 'Waiter'];
// const uniqueStaff = [...new Set(staff)];

// console.log(uniqueStaff);
// console.log(new Set(staff).size);

// // MAPS

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'France, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 10)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closed!');
// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get('categories'));
// console.log(rest.get(1));
// console.log(rest.get(true));

// const time = 12;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// console.log(rest.clear);

// MAPS FUNDAMENTALS
const rest2 = new Map();
rest2.set('name', 'Classicao Italiano');

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

console.log(question);

//Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your number?'));
// console.log(answer);

// console.log(question.get(answer === question.get('correct')));

// Convert Map to array
console.log(...question);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

// Coding Challenge #3

/* 

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:

      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀

*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],

  [36, '🔁 Substitution'],

  [47, '⚽️ GOAL'],

  [61, '🔁 Substitution'],

  [64, '🔶 Yellow card'],

  [69, '🔴 Red card'],

  [70, '🔁 Substitution'],

  [72, '🔁 Substitution'],

  [76, '⚽️ GOAL'],

  [80, '⚽️ GOAL'],

  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];

console.log(events);

gameEvents.delete(gameEvents.get(64));

console.log(
  `An event happened, on average every ${90 / gameEvents.size} minutes.`
);

for (const [key, value] of gameEvents) {
  console.log(`[${key <= 45 ? 'FIRST' : 'SECOND'} HALF]: ${key}: ${value}`);
}

// WORKING WITH STRINGS

const airplane = 'Indigo India Airlines';

const plane = 'Airbus A360neo';

console.log(plane.length);

console.log('B737'[0]);

console.log(airplane.indexOf('r'));

console.log(airplane.lastIndexOf('r'));

console.log(airplane.slice(4, 7));

console.log(airplane.slice(0, airplane.indexOf(' ')));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') console.log('You got the middle seat!');
  else console.log('You got lucky!');
};

checkMiddleSeat('11B');

checkMiddleSeat('23E');

checkMiddleSeat('3E');

checkMiddleSeat('2A');

console.log(new String('Mayank'));

console.log(typeof new String('Mayank').slice(-1));

console.log(airplane.toLowerCase());

console.log(airplane.toUpperCase());

const passenger = 'mAyANk';

const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

const email = 'hello@mayank.io';

const loginEmail = ' Hello@Mayank.io  \n';

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(email === normalizedEmail);

// replacing

const priceGB = '288,97$';

const priceUS = priceGB.replace('$', 'USD');

console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23.';

console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

console.log(plane.includes('A360'));

console.log(plane.startsWith('Airbus'));

console.log(plane.endsWith('neo'));

console.log('a very nice string'.split(' '));

const passenger2 = 'jessica ann smith davis';

const capitalizeName = function (name) {
  const names = name.split(' ');

  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.split(1));

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName(passenger);

capitalizeName(passenger2);

//////////////////////////////////////

// Coding Challenge #4

/* 

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)

underscore_case

 first_name

Some_Variable 

  calculate_AGE

delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)

underscoreCase      ✅

firstName           ✅✅

someVariable        ✅✅✅

calculateAge        ✅✅✅✅

delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉

HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b

HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉

HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

*/

const convertSnakeCaseToCamelCase = function (word) {
  const words = word.toLowerCase().trim().split('_');

  const newWord = [words[0]];

  for (const [key, value] of words.entries()) {
    if (key !== 0)
      newWord.push(value.replace(value[0], value[0].toUpperCase()));
  }

  console.log(newWord.join(''));
};

convertSnakeCaseToCamelCase('underscore_case');

convertSnakeCaseToCamelCase(' first_name');

convertSnakeCaseToCamelCase('Some_Variable ');

convertSnakeCaseToCamelCase('  calculate_AGE');

convertSnakeCaseToCamelCase('delayed_departure');
