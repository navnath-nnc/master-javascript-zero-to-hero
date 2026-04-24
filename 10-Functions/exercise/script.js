'use strict';
// Default Parameters\\

/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 100 * numPassangers,
) {
  //ES5
  //   numOfPassangers = numOfPassangers || 1;
  //   price = price = price || 200;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  bookings.push(booking);

  console.log(bookings);
};

createBooking('1B7H');

createBooking('1B7H', 2);
createBooking('1B7H', 4);
createBooking('1B7H', 5);
createBooking('1B7H', undefined, 1000); */

//How Passing Arguments Works: Value vs. Reference
/* const flight = 'LH234';
const person = {
  name: 'Rohit Sharma',
  passport: 2345679,
};

const checkIn = function (flightNum, passanger) {
  ((flightNum = 'JG123'), (passanger.name = `Mr. ${passanger.name}`));

  if (passanger.passport === 2345679) {
    alert('check in');
  } else alert('wrong passport');
};

// checkIn(flight, person);
// console.log(flight);
// console.log(person);

// //same as...
// const flightNum = flight;
// const passanger = person;

const newPassport = function (obj) {
  obj.passport = Math.trunc(Math.random() * 100000);
};

newPassport(person);
checkIn(flight, person) */

//Functions Accepting Callback Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const higherOrderFunction = function (str, fn) {
//   console.log(`original string: ${str}`);
//   console.log(`transformed string: ${fn(str)}`);
//   console.log(`func: ${fn}`);
//   console.log(`transformed by: ${fn.name}`);
// };

// higherOrderFunction('Javascript is the best', oneWord);

// higherOrderFunction('Javascript is the best', upperFirstWord);

// //call back

// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// Functions Returning Functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetingFunc = greet('hey');
// greetingFunc('Abhishek');
// greetingFunc('Ishan');

// greet('hello')('Shubhman');

//arrow function
/* 
const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greetingFunc = greet('hey');
greetingFunc('Shreyash');

greetingFunc('Rishabh');
greet('Hello')('Tilak'); */

/* // The call and apply Methods
const lufthansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(234, 'Virat Kohali');
lufthansa.book(456, 'Rohit Sharma');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

//Not Working
// book(123, 'Hardik Pandya');

book.call(eurowings, 134, 'Kuldeep Yadav');

book.call(lufthansa, 456, 'Yazuvendra Chahal');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 789, 'Smriti Mandhana');
console.log(swiss);

//Apply Method

const flightData = [135, 'Harmanpreet Kaur'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//bind method

// book.call(eurowings, 134, 'Kuldeep Yadav');

const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
bookEW(468, 'Washington Sundar');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Axar Patel');
console.log(eurowings);

//with event listeners
lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log('this', this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyplane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(200)); */

// Coding Challange #1

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

/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')} \n(Write option number)`,
      ),
    );
    console.log(answer);
    //register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if ((type = 'array')) {
      console.log(this.answers);
    } else if ((type = 'string')) {
      console.log(`poll results are ${this.answers}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [5, 3, 6, 2, 9, 1] }, 'string');
poll.displayResults.call({ answers: [5, 3, 6, 2, 9, 1] });
 */

// Immediately Invoked Function Expressions (IIFE)
/* const runOnce = function () {
  console.log(`this will never run again`);
};
runOnce();
runOnce();

(function () {
  console.log(`this will never run again`);
  const num = 23;
})();
console.log(num);

(() => console.log(`this will ALSO never run again`))(); */

//Closures

/* const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passangers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

//exmaple 1

let f;

let g = function () {
  let a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  let b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//reassigning f
h();
f();
console.dir(f);

// example-2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passangers.`);
    console.log(`there are 3 groups, each with ${perGroup} passangers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};
const perGroup = 3;
boardPassengers(180, 3); */

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
