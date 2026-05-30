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
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'sandard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //.textContent = 0
  const moves = sort ? movements.sort((a, b) => a - b) : movements;
  moves.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((mov, curr) => mov + curr, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (currentAcc) {
  const incomes = currentAcc.movements
    .filter(move => move > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = currentAcc.movements
    .filter(move => move < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = currentAcc.movements
    .filter(move => move > 0)
    .map(deposit => (deposit * currentAcc.interestRate) / 100)
    .filter(addInt => addInt >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// const user = 'Steven Thomas Williams';
// Computiing user names
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    // console.log(acc.owner);
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);

function updateUI(acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
}

/////////////////////////////////////////////////
// Event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('LOGIN');
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    //update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  // console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log('valid account');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(move => move >= amount / 10)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount?.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // console.log('account deleted');

    //Find account to delete using index
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    // console.log(index);
    //Delete account
    accounts.splice(index, 1);
    // console.log(accounts);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//  Simple Array Methods
/* let arr = ['a', 'b', 'c', 'd', 'e'];
//SLICE method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE METHOD
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));

//REVERSE methods=
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'g', 'h', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT method
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

//JOIN method
console.log(letters.join('-')); */

//The New at Method
/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last element array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

//at method with string
console.log('varun'.at(0));
console.log('varun'.at(-1));


//  Looping Arrays: forEach
/* const movement1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let [i, movement] of movement1.entries()) {
  if (movement > 0) {
    console.log(`movement ${i + 1}: you deposited ${movement}`);
  } else if (movement < 0) {
    console.log(`movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
}

console.log('--------FOREACH----------');

movement1.forEach((move, i, arr) => {
  if (move > 0) {
    console.log(`movement ${i + 1}: you deposited ${move}`);
  } else if (move < 0) {
    console.log(`movement ${i + 1}: you withdrew ${Math.abs(move)}`);
  }
}); */

// forEach With Maps and Sets
/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key} ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
}); */

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// 1.
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach((dogAge, i) => {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`,
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]); */

// The map Method
/* let movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const EurToUSD = 1.1;

const movmentsUSD = movements2.map(currency => {
  return currency * EurToUSD;
});
console.log(movmentsUSD);

const movementsUSDFor = [];
for (const mov of movements2) movementsUSDFor.push(mov * EurToUSD);
console.log(movementsUSDFor);

const movementsDescriptions = movements2.map((mov, i) => {
  return `movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'}  ${Math.abs(mov)}`;
});
console.log(movementsDescriptions); */

// The filter Method

/* const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);
const depositsFor = [];
for (let mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
 */

// The reduce method
/* console.log(movements);

const balance = movements.reduce((acc, curr, i, arr) => {
  console.log(`iteration ${i} : ${acc}`);
  return acc + curr;
}, 100);
console.log(balance);

let balance2 = 0;
for (let mov of movements) balance2 += mov;
console.log(balance2); */

//maxmimum value
/* 
const maxVal = movements.reduce((acc, curr)=> {
    if(acc>curr)return acc
    else return curr;
}, 200)
console.log(maxVal) */

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const ages = [5, 2, 4, 1, 15, 8, 3];
// const humanAges = ages.map(dogAge => {
//   return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
// });
// console.log(humanAges);

/* const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (dogAge) {
    return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
  });
  const adults = humanAges.filter(function (humanAge) {
    return humanAge >= 18;
  });
  const averages = adults.reduce(function (acc, curr, i, arr) {
    return (acc = acc + curr);
  }, 0);
  const average = averages / adults.length;
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2); */

// The Magic of Chaining Methods
// PIPELINE

/* const EuroToUSD = 1.1;
console.log(movements);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * EuroToUSD;
  })
  .reduce((acc, curr) => acc + curr);
console.log(totalDepositsUSD);
 */

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const calcAverageHumanAge = function (ages) {
  return ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(adult => adult >= 18)
    .reduce((avergae, curr, i, arr) => avergae + curr / arr.length, 0);
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2); */

//The find Method
/* const firstWithdrawal = movements.find(move => move > 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const findAccount = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(findAccount);

// const findAccount1 = accounts.filter(acc => acc.owner === 'Jessica Davis');
// console.log(findAccount1);

// for (let acc of accounts) {
//   if (acc.owner === 'Jonas Schmedtmann') {
//     console.log(acc.owner);
//   }
// }

// const findAccount2 = accounts.map(acc => acc.owner === 'Sarah Smith');
// console.log(findAccount2); */

// The New findLast and findLastIndex Methods

/* const lastWithdrwals = movements.findLast(item => item < 0);

console.log(lastWithdrwals);

//'your latest large movement was x movements ago'

const latestLargeMovementIndex = movements.findLastIndex(
  item => Math.abs(item) > 2000,
);
console.log(latestLargeMovementIndex);

console.log(
  `your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`,
);
 */

//some and every method
/* console.log(movements);
//Equality
console.log(movements.includes(-130));

//Condition
const deposit = movements.some(move => move === -130);
console.log(deposit);
const anyDeposits = movements.some(move => move > 0);
console.log(anyDeposits); */

//every

/* const depositEvery = movements.every(move => move > 0);
const depositEvery1 = account4.movements.every(move => move > 0);
console.log(depositEvery1);

//separate call back
const deposit = move => move > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

//flat method

/* const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat(2));

const accMovements = accounts.map(acc => acc.movements);
console.log(accMovements);
const allMovements = accMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance);

const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr);
console.log(overalBalance2);

//flatMap method
const overallBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr);
console.log(overalBalance3); */

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

/* const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1.
const huskyWeight = breeds.find(average => {
  return average.breed === 'Husky';
}).averageWeight;
console.log(huskyWeight);

//2.
const dogBothActivities = breeds.find(
  activity =>
    activity.activities.includes('running') &&
    activity.activities.includes('fetch'),
).breed;
console.log(dogBothActivities);

// 3.
const allActivities = breeds.flatMap(activity => activity.activities);

console.log(allActivities);

// 4.
const uniqueActivities = breeds
  .flatMap(activity => activity.activities)
  .filter((item, index, arr) => arr.indexOf(item) === index);
const uniqueActivities1 = [...new Set(allActivities)];

console.log(uniqueActivities);

// 5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(activity => activity.activities),
  ),
].filter(activity => activity !== 'swimming');
console.log(swimmingAdjacent);

// 6.
const allAverageWeight = breeds.every(weight => weight.averageWeight >= 10);
console.log(allAverageWeight);

// 7.

const activeBreed = breeds.some(active => active.activities.length >= 3);
console.log(activeBreed);

// Bonus.

const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(weight => weight.averageWeight);
// .reduce((acc, curr) => (acc > curr ? acc : curr));
const heaviest = Math.max(...fetchWeights);
console.log(heaviest);
 */

//Sorting Arrays

//strings
/* const sortArray = [
  'Virat',
  'Rohit',
  'Jasprit',
  'Shreyash',
  'Shubhman',
  'Kuldeep',
];
console.log(sortArray.sort());

console.log(movements);
//
// return < 0, A,B //Keep Order
// return > 0, B, A //Switch Order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// movements.sort((a, b) => {
// if (a > b) return -1;
// if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements); */

//Array Grouping

/* console.log(movements);
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawls',
);
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return `inactive`;
});
console.log(groupedByActivity);

const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts); */

// Ways of Creating and Filling Arrays
/* console.log([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

//Empty Arrays + Fill Method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
console.log(x);
x.fill(23, 2, 6);
console.log(x);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')),
  );
  console.log(movementsUI);
});

const movementsUI2 = [...document.querySelectorAll('movements__value')];
console.log(movementsUI2); */

// Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

//toReversed
/* console.log(movements);
// console.log(movements.slice().reverse()); //alternative to not mutate original array using slice()
console.log(movements.toReversed());
console.log(movements);

//toSorted (sort)

console.log(movements.toSorted((a, b) => a - b));
console.log(movements);

//toSpliced (splice)
console.log(movements.toSpliced(2, 5));
console.log(movements);

//non destructive method to change any element in  the array
const newMovements = movements.with(1, 2000);
console.log(newMovements);
console.log(movements); */

//Practice Array Methods
/* // 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, curr) => sum + curr);
console.log(bankDepositSum);

// 2.
// const deposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const deposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(deposits1000);

//prefix operator

let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits, withdrawls } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      sums[curr > 0 ? 'deposits' : 'withdrawls'] += curr;
      //  (sums.deposits += curr) : (sums.withdrawls += curr);
      return sums;
    },

    { deposits: 0, withdrawls: 0 },
  );
console.log(deposits, withdrawls);

// 4.
//this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'in', 'on', 'with', 'but', 'and', 'or'];
  const capitalize = str => str.toUpperCase()[0] + str.slice(1);
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an example'));
 */

///////////////////////////////////////
// Coding Challenge #5
/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/* // 1.
dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
const eatingFoodCorrect = dogSarah.curFood / dogSarah.recFood;
console.log(eatingFoodCorrect);
// 3.

const ownersTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(owner => owner.owners);
console.log(ownersTooMuch);

const ownersTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(owner => owner.owners);

console.log(ownersTooLittle);

// 4.
console.log(`${ownersTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
const EXACTLY = dogs.some(dog => dog.curFood === dog.recFood);
console.log(EXACTLY);

// 6.
const checkEatingOkay = dog =>
  dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;
console.log(dogs.every(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsGroupedByPortion = Object.groupBy(dogs, dog => {
  if (dog.curFood > dog.recFood) {
    return `too-much`;
  } else if (dog.curFood < dog.recFood) {
    return `too-little`;
  } else {
    return `exaxt`;
  }
});
console.log(dogsGroupedByPortion);

// 9.
const dogsGroupedByOwners = Object.groupBy(
  dogs,
  dog => `${dog.owners.length}-owners`,
);
console.log(dogsGroupedByOwners);

// 10.
const sortArray = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(sortArray);
 */
