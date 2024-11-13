'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);

  bookings.push(booking);
};

createBooking('LH123', 100, 240);

const flight = 'LH123';

const mayank = {
  name: 'Mayank Ukey',

  passport: 879875435134,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';

  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 879875435134) alert('checked in');
  else alert('Wrong passport');
};

// checkIn(flight, mayank);

console.log(flight);

console.log(mayank);

const flightNum = flight;

const passenger = mayank;

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str;

  return [first.toUpperCase(), ...others].join('');
};

// Higher order function

const transformer = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is best', upperFirstWord);

transformer('javascript is best', oneWord);

const greeting = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greeting('Hey!');

greeterHey('Mayank');

greeterHey('Stephen');

const greeting2 = greeting => name => console.log(`${greeting} ${name}`);

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Mayank Ukey');
lufthansa.book(123, 'Thomas Shelby');

console.log(lufthansa);

const eurowings = {
  name: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

// Does not work
const book = lufthansa.book;
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary cooper');
console.log(lufthansa);

// Apply method
const flightData = [583, 'Random Name'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(lufthansa, ...flightData);
console.log(lufthansa);

// BIND METHOD
const bookEw = book.bind(eurowings);
const bookLh = book.bind(lufthansa);

bookEw(10, 'Stephen Strange');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Steve Rogers');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addVAT2 = value => addTax(0.23, value);
console.log(addVAT2(100));
console.log(addVAT2(23));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: C++', '3: Rust'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    for (const option of this.options) console.log(option);
    const input = Number(prompt(this.question));

    input <= this.options.length && input >= 0 && this.answers[input]++;

    this.displayResults(this.answers);
  },

  displayResults(type) {
    console.log(typeof type);
    if (typeof type === 'string') {
      console.log(`Poll results are ${type}`);
    } else if (typeof type === 'array') {
      console.log(type);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
