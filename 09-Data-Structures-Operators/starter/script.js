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

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 7]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// OBJECTS
const { name, openingHours: openinghours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = openingHours;

restaurant.orderDelivery({
  time: '22:30',
  address: '22 Blecker St',
  mainIndex: 2,
  starterIndex: 2,
});

// Spread Operator
const array = [7, 8, 9];
const badNewArr = [1, 2, ...array];
console.log(badNewArr);
console.log(...badNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenu);

// Iterables - strings, map, arrays, sets | not objects
const str = 'Mayank';
const letters = [...str, ' ', 'U.'];
console.log(letters);

// const ingredients = [
//   prompt("Let's make Pasta!: Ingredient 1"),
//   prompt("Let's make Pasta!: Ingredient 2"),
//   prompt("Let's make Pasta!: Ingredient 3"),
// ];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { ...restaurant, founder: 'Tom', foundedIn: '1925' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Risoto Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Rest Pattern
// Spread used on right side of = | Rest used on left side of =
const [first, second, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(first, second, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// Objects
const { sat, ...weekday } = restaurant.openingHours;
console.log(sat, weekday);

// Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
  return sum;
};

add(2, 3);
add(1, 2, 3, 4, 5);
add(1);

const xx = [23, 1, 95];
add(...xx);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

// Shortcircuiting
console.log('-----OR-----');
console.log(3 || 'Mayank');
console.log('' || 'Mayank');
console.log(true || 'Mayank');
console.log(undefined || 'Mayank');
console.log(undefined || null);
console.log(undefined || null || false);
console.log(undefined || 0 || '' || ' ' || 'hello' || 23 || null);
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;
console.log(guests1, guests2);

console.log('-----AND------');
console.log(0 && 'Mayank');
console.log(7 && 'Mayank');

console.log('Hello' && 23 && null && 'mayank');
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// NULLISH OPERATOR : null and undefined
const guests4 = restaurant.numGuests ?? 10;

const rest1 = { name: 'Caapri', numGuests: 10 };
const rest2 = { name: 'Popa', numGuests: 2 };
const rest3 = { name: 'Caapri', owner: 'Giovani' };

rest1.numGuests = rest1.numGuests || 20;
rest2.numGuests = rest2.numGuests || 10;

// OR ASSIGNMENT OPERATOR
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1, rest2);

// FOR-OF LOOP
const totalMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of totalMenu) console.log(item);
for (const [i, el] of totalMenu.entries()) console.log(`${i + 1}: ${el}`);

console.log(openinghours);

// without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// METHODS
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.risoto?.(0, 1) ?? 'method does not exist');

// ARRAYS
// const users = [{ name: 'mayank', email: 'mayank@gmail.com' }];
const users = [];
console.log(users[0]?.name ?? 'User array empty');

// LOOPING OBJECTS: KEYS, VALUES, ENTRIES
const properties = Object.keys(openinghours);
for (const day of Object.keys(openingHours)) console.log(day);

// console.log(`We are open on`)
console.log(`We are open for ${properties.length} days.`);

let openStr = '';
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries)
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
