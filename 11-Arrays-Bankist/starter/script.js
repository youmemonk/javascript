'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // shallow copy

// // splice - changes original array
// // console.log(arr.splice(2));
// // console.log(arr.splice(-1));
// // console.log(arr.splice(1, 2));
// console.log(arr);

// // reverse
// console.log(arr.reverse()); // changes original array
// console.log(arr);

// // concat
// const arr2 = ['e', 'f', 'g', 'h', 'i'];
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // join
// console.log(letters.join('-'));

// // at method
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last element of array
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));
// console.log(arr.slice(-1));

// // looping - forEach
// // traditional method
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// // for each method - break and continue dont work here
// movements.forEach(function (movement, i, array) {
//   if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// });

// // map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // set
// // there is no value in set
// const currenciesSet = new Set(['USD', 'SGD', 'INR', 'EUR', 'EUR', 'USD']);
// currenciesSet.forEach(function (value, _, map) {
//   console.log(`${key}: ${value}`);
// });

// const EURToUSD = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * EURToUSD;
// });
// const movementsArrow = movements.map(mov => mov * 10);

// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsArrow);

// const movementsMore = movements.map((mov, i, arr) => {
//   // if (mov > 0) return `Movement ${i + 1}: You deposited ${mov}`;
//   // else return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;

//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });

// console.log(movementsMore);

// // FILTER METHOD
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositsFor.push(mov);
// }
// console.log(depositsFor);

// const withdrawals = movements.filter(movement => movement < 0);
// console.log(withdrawals);

// // REDUCE METHOD
// // accumulator -> snowball
// const balance = movements.reduce(function (accumulator, current, index, arr) {
//   return accumulator + current;
// }, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// // Maximum value
// const maximumValue = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// const maxValue = movements.reduce((acc, mov) => (acc > mov ? acc : mov));

// console.log(maximumValue);
// console.log(maxValue);

// // FIND METHOD - returns first element for true condition
// const firstWithDrawal = movements.find(mov => mov < 0);
// console.log(firstWithDrawal);

// const account = accounts.find(account => account.owner === 'Jessica Davis');
// console.log(account);

// SOME METHOD
// console.log(movements);
// console.log(movements.includes(-130));
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// const anyDepositsAbove500 = movements.some(mov => mov > 500);

// // SOME CONDITION : ANY CONDITION MUST BE TRUE
// console.log(movements.includes(-130));
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // EVERY CONDTION : MUST BE TRUE
// console.log(movements.every(mov => mov > 0));

// // Seperate Callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// // FLAT METHOD - specify the depth
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(account => account.movements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const quickOverallBalance = accounts
//   .map(account => account.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(quickOverallBalance);

// // FLATMAP METHOD - flat and map at the same time
// // flatmap only goes one level deep
// const flatmapOverallBalance = accounts
//   .flatMap(account => account.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(flatmapOverallBalance);

// // SORTING ARRAYS - sorts arrays based on string
// const owners = ['Mayank', 'Zach', 'Adam', 'Martha', 'Jonas'];
// console.log(owners.sort());
// console.log(owners);

// console.log(movements);
// console.log(movements.sort());

// // return < 0 if A, B (keep order)
// // return > 0 if B, A (switch order)
// // movements.sort((a, b) => {
// //   if (b > a) return -1;
// //   if (a > b) return 1;
// // });

// movements.sort((a, b) => a - b);

// console.log(movements);

/////////////////////////////////////////////////
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${movement}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = Math.abs(
    account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  );

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${out}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0))
      .join('');
  });
};

createUsernames(accounts);

function updateUI(account) {
  // Display Movements
  displayMovements(account.movements);

  // Display Balance
  calcDisplayBalance(account);

  // Display Summary
  calcDisplaySummary(account);
}

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & login message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  // inputCloseUsername.value = inputClosePin.value = '';

  if (username === currentAccount.username && pin === currentAccount.pin) {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  inputLoanAmount.value = '';

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    // Add the amount
    currentAccount.movements.push(amount);

    // Update the UI
    updateUI(currentAccount);
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// More ways of creating Arrays
const arr = [1, 2, 3, 4, 5];
console.log([1, 2, 3, 4, 5]);
console.log(new Array(1, 2, 3, 4, 5));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
console.log(x.map(a => a * 5));

// x.fill(1);
// x.fill(1, 3);
x.fill(1, 3, 5);
console.log(x);

// arr.fill(25);
arr.fill(25, 1, 3);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (current, i) => i + 1);
console.log(z);

const randomDiceRolls = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(randomDiceRolls);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  console.log(movementsUI.map(el => el.textContent.replace('€', '')));
});
