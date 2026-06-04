'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const fromatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);
  if (daysPassed === 0) return `today`;
  if (daysPassed === 2) return `yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // const hour = `${date.getHours()}`.padStart(2, 0);
    // const min = `${date.getMinutes()}`.padStart(2, 0);
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));
  // console.log(combinedMovsDates);
  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);
  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    // console.log(obj);
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(movementDate);
    // console.log(movementDate);

    const displayDate = fromatMovementDate(date, acc.locale);
    const formattedMov = formatCur(movement, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
        <div class="movements_date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const second = String(Math.trunc(time % 60)).padStart(2, 0);

    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${second}`;

    //when 0 second, stop timer and logout user
    if (time == 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // decrease the time 1s
    time--;
  };
  // set time to 5 minues
  let time = 120;

  // call the time every 5 secconds
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// Faked accoun always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// Experimenting API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday: 'long',
};
// const locale = navigator.language;
// console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(
  currentAccount.locale,
  options,
).format(now);
// const now = new Date();
// const day = `${now.getDay()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);

// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }

  // Reset timer
  clearInterval(timer);
  timer = startLogoutTimer();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';

  // Reset timer
  clearInterval(timer);
  timer = startLogoutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    //0,2,4,6,
    if (i % 2 === 0) row.style.backgroundColor = 'orange';
    //3,6,9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Converting and Checking Numbers
/* console.log(23 === 23.0);

// base-10 //number 0 to 9 //10/3--3.3333333
// bse-2 //number 0 and 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(Number.parseInt('23', 10));
console.log(Number.parseInt('ea23'));

console.log(Number.parseInt('2.5erm'));
console.log(Number.parseFloat('2.5erm'));

// check if value is isNaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN('20/0'));

// checke if value is Number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite('20/0'));

// check if it is integer

console.log(Number.isInteger(23));
console.log(Number.isInteger('23'));
console.log(Number.isInteger(23 / 0));
 */

// // Math and Rounding

// console.log(Math.sqrt(16));
// console.log(16 ** (1 / 2));
// console.log(8 ** (1 / 3));
// console.log(Math.max(1, 2, 4, 7, 5, 10));
// console.log(Math.max(3, '10', 8, 9));
// console.log(Math.max(4, 6, 9, '10px'));
// console.log(Math.min(1, 3, 5, 7, 9));

// // calculate circle area
// console.log(Math.PI * parseInt('10px') ** 2);
// console.log(Math.floor(Math.random() * 6 + 1));

// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + 1) + min;
// };

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

// // rounding integers
// console.log(Math.round(23.4));
// console.log(Math.round(23.7));

// console.log(Math.ceil(23.4));
// console.log(Math.ceil(23.7));

// console.log(Math.floor(23.4));
// console.log(Math.floor('23.7'));

// console.log(Math.trunc(23.5));

// console.log(Math.floor(-23.5));
// console.log(Math.trunc(-23.5));

// // rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log(+(3.345).toFixed(2));
// console.log((3.345).toFixed(2));

// The Remainder Operator

/* console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 3 * 2 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = num => num % 2 === 0;
console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(16)); */

// Numeric separators

// 234,567, 000
/* const diameter = 234_567_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
console.log(transferFee1);
const transferFee2 = 1_500;
console.log(transferFee2);

const PI = 3.14_15;
console.log(PI);

console.log(Number('230_000'));
console.log(parseInt('230_000')); */

//Working with BigInt
/* console.log(2 ** 53 - 1);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);

const huge = 198218974793479437900347n;
console.log(BigInt(198218974793479437900347));

//Operations

console.log(1000n + 1000n);
const num = 23;
console.log(1300n + BigInt(num));
console.log(15n > 23);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is really a BIG!!!');

//Divisions
console.log(12n / 3n);
console.log(10 / 3); */

// Creating dates

//Create a date
/* const now = new Date();
console.log(now);

console.log(new Date('Jun 01 2026 19:58:24'));
console.log(new Date('April 15 2019'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2033, 5, 1, 12, 0, 1));
console.log(new Date(2033, 5, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
console.log(new Date(259200000));

// working with dates
const future = new Date(2033, 5, 1, 12, 0);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2001220200000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future); */

// Operations with Dates
/* const future = new Date(2033, 5, 1, 12, 0);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log(calcDaysPassed(new Date(2033, 5, 20), new Date(2033, 5, 15)));

// Internationalizing Numbers (Intl)
const num = 38847664.23;
const options1 = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false,
};
console.log(new Intl.NumberFormat('en-US', options1).format(num));
console.log(new Intl.NumberFormat('de-DE', options1).format(num));
console.log(new Intl.NumberFormat('ar-SY', options1).format(num));
console.log(new Intl.NumberFormat(navigator.language, options1).format(num)); */

// Timers: setTimeout and setInterval

/* const ingredients = ['olives', 'spinnach'];

const pizzaTimer = setTimeout(
  (Ing1, Ing2) => console.log(`Here is your Pizaa with ${Ing1} and ${Ing2}🍕`),
  3000,
  ...ingredients,
);

console.log('waiting...');
if (ingredients.includes('spinnach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); */
