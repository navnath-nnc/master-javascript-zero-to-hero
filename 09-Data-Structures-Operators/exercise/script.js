'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    otherIngredients.length === 0
      ? console.log(mainIngredients)
      : console.log(mainIngredients, otherIngredients);
  },
};

// console.log(restaurant);

/* //Destructure the books array into two variables called firstBook and secondBook.

const books = ['Atomic Habits', 'The Alchemist', 'Rich Dad Poor Dad'];

const [firstBook, secondBook] = books;

console.log(firstBook, secondBook);
// Destructure the books array into a variable called thirdBook. You must skip the first two books.

const [, , thirdBook] = books;
console.log(thirdBook); */

// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

/* const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount); */

// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//Destructuring objects
// restaurant.orderDelivery({
//   starterIndex: 2,
//   mainIndex: 2,
//   time: '20:22',
//   address: 'Via Del 21',
// });

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(name, openingHours, categories);
// // console.log(restaurantName, hours, tags);

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 700;
// let b = 800;
// let c = 900;

// const obj = { a: 7, b: 8, c: 9 };

// ({ a, b, c } = obj);
// console.log(a, b, c);

//nested objects

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

//Spread Operator
// const arr = [7, 8, 9];
// const myArr = [5, 6, arr[0], arr[1], arr[2]];
// console.log(myArr);
// const newArr = [6, ...arr];
// console.log(newArr);
// console.log(...newArr);
// const menu = [...restaurant.mainMenu, 'Vada Pav']; //spread operator
// console.log(menu);
// const [firstMenu, ...restMenu] = menu; //rest operator
// console.log(firstMenu, restMenu);

// const menuCopy = [...menu];
// console.log(menuCopy);

// const combineMenu = [...menu, ...menuCopy];
// console.log(combineMenu);

//Iterables: arrays, strings, maps, sets. NOT Objects
// const str = 'Sanju';
// const fullName = [...str, '', 'S'];
// console.log(fullName);
// console.log(...str);
// // console.log(`${...str}`);

// const ingredients = [
//   // prompt("let's make pasta, ingredient1?"),
//   // prompt('ingredient2'),
//   // prompt('ingredient3'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
// const newRestaurant = { foundedIn: 1998, founder: 'kohli', ...restaurant };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };

// restaurantCopy.name = 'kohlis';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

//SPREAD because on the right side of =
// const arr = [1, 2, ...[3, 4]];

// //REST becuase on the left side of =
// const [a, b, ...others] = arr;
// console.log(a, b, others);

// const [Pizza, , Risotto, ...others] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, others);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);
/* 
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3, 4);
add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6, 7);

const arr = [1, 2, 3, 4];
add(...arr); */

// restaurant.orderPizza('mashroom', 'onion', 'chilli', 'paneer');
// restaurant.orderPizza('cheese');

//Short-Circuiting
//OR
// console.log(4 || 'Rohit');
// console.log('' || 'Hardik');
// console.log(true || 0);
// console.log(undefined || null);

// console.log('' || undefined || false || 'Hi' || 'Shubman');
/* restaurant.guestsNum = 0;
// const guest1 = restaurant.guestsNum ? restaurant.guestsNum : 10;
// console.log(guest1);

const guest2 = restaurant.guestsNum || 10;
console.log(guest2);

//Nullish operator: null or undefined(Not 0 or '')

const correctGuests = restaurant.guestsNum ?? 10;
console.log(correctGuests); */

//AND

/* console.log(undefined && 'Yashswi');
console.log('runner' && 'cricketer');
console.log('Sachin' && 'Sourav' && 'Rahul' && null && 'Laxman');

if (restaurant.orderPizza) {
  restaurant.orderPizza('cheese', 'onion', 'chilli');
}

restaurant.orderPizza && restaurant.orderPizza('cheese', 'onion', 'chilli');
 */

// const restro1 = {
//   name: 'McD',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const restro2 = {
//   name: 'Chitale Sweets',
//   owner: 'AG Chitale',
// };

//OR assignment operator

// restro1.numGuests = restro1.numGuests || 10;
// restro2.numGuests = restro2.numGuests || 10;

// restro1.numGuests ||= 10;
// restro2.numGuests ||= 10;

//nullish assignment operator(null or undefined)
// restro1.numGuests ??= 10;
// restro2.numGuests ??= 10;

// AND assignment operator
// // restro1.owner = restro1.owner && '<ANONYMOUS>';
// // restro2.owner = restro2.owner && '<ANONYMOUS>';

// restro1.owner &&= '<ANONYMOUS>';
// restro2.owner &&= '<ANONYMOUS>';

// console.log(restro1);
// console.log(restro2);

/////////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* // 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6.
function printGoals(...numGoals) {
  console.log(`${numGoals.length} goals were scored!`);
}

printGoals('Ronaldo', 'Pele', 'Messi');
printGoals('Nemayar', 'Mubape');
printGoals(...game.scored);

team1 > team2 && console.log(`Team1 is more likely to win!`);
team2 > team1 && console.log(`Team2 is more likely to win!`); */

// Looping Arrays: The for-of Loop
/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let item of menu) console.log(item);

for (let item of menu.entries()) console.log(item);

for (let [i, el] of menu.entries()) console.log(`${i + 1}:${el}`); */

//Optional Chaining

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

//example
/* const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
} */

//methods

/* console.log(restaurant.order?.(0, 1) ?? 'method does not exist.');

console.log(restaurant.orderWada?.(0, 1) ?? 'method does not exist'); */

//Arrays

// const user = [{ name: 'Siraj', email: 'siraj@bcci.com' }];
/* const user = [];
console.log(user[0]?.name ?? 'Array is empty');

if (user.length > 0) {
  console.log(user[0]?.name);
} else {
  console.log('Array is empty');
} */

//Looping Objects: Object Keys, Values, and Entries

//Property names
/* const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day} `;
}
console.log(openStr); */

//Property values
/* const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);
for (const [day, { open, close }] of entries) {
  console.log(`on ${day}, we are open at ${open} and close at ${close}`);
} */

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1.
/* 
for (let [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1} : ${player}`);

// 2.
const odds = Object.values(game.odds);
let avgOdd = 0;
for (let odd of odds) avgOdd += odd;
avgOdd /= odds.length;
console.log(avgOdd);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
 */

//Sets
/* const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pasta',
  'Pizza',
  'Rissoto',
  'Rissoto',
]);
console.log(ordersSet);
console.log(new Set('Washington'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
console.log(ordersSet.add('Garlic Bread'));
console.log(ordersSet.add('Garlic Bread'));
console.log(ordersSet.delete('Rissoto'));
console.log(ordersSet);

for (let order of ordersSet) console.log(order);
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size,
);

console.log(new Set('Ishan').size); */

//New Operations to Make Sets Useful!
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

/* const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('intersection: ', commonFoods);

//Set to Array
console.log([...commonFoods]);

const italianFoodsFusion = italianFoods.union(mexicanFoods);
console.log('union: ', italianFoodsFusion);
console.log([...italianFoodsFusion]);

//without union merge element of two sets
const mixFoods = [...new Set([...italianFoods, ...mexicanFoods])];
console.log(mixFoods);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('difference italian: ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('difference mexican: ', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);

console.log('uniqeMixFoods', uniqueItalianAndMexicanFoods);
console.log(italianFoods.isDisjointFrom(mexicanFoods)); */

//'difference italian: ',
/* const rest = new Map();
console.log(rest.set('name', 'Classico Italiano'));
rest.set(1, 'Mumbai', 'Maharashtra');
rest.set(2, 'Istunbul', 'Turkey');
rest.set('categories', ['Italian', 'Pizza', 'Veg', 'Organic']);
rest.set('open', 11);
rest.set('close', 23);
rest.set(true, 'We are open:D');
rest.set(false, 'We are closed:(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
let time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
console.log(rest.delete(2));
// rest.clear();
console.log(rest);
console.log(rest.size);
const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest.get(arr)); */

//Maps: Iteration
/* const question = new Map([
  ['question', 'What is the best programming language in the world!'],
  [1, 'Java'],
  [2, 'Python'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);
console.log(Object.entries(openingHours));
const openHours = console.log(new Map(Object.entries(openingHours)));

console.log(question.get('question'));
for (let [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt('your answer'));
let answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
 */

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
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
/* 
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

const time = [...gameEvents.keys()];
console.log(time);

// 2.
console.log(gameEvents.delete(64));
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`,
);

const gameTime = [...gameEvents.keys()].pop();
console.log(gameTime);

console.log(
  `An event happened, on average, every ${gameTime / gameEvents.size} minutes`,
);

// 4.
// for (let [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else if (key > 45) {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

for (let [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
 */

// Working With Strings - Part 1

/* const airline = 'Indigo Air India';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
console.log('737B'[0]);

console.log(airline.length);
console.log('737B'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('I'));
console.log(airline.indexOf('India'));
console.log(airline.slice(7, 10));
console.log(airline.slice(airline.indexOf(' ') + 1));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  let s = seat.slice(-1);
  //B and E are middle seats
  if (s === 'B' || s === 'E') {
    console.log(`you got the middle seat😐`);
  } else {
    console.log(`you are lucky!😊`);
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(typeof new String('India'));
console.log(typeof 'India'.slice(0, 3));
 */
/* 
// Working With Strings - Part 2
const airline = 'INDIGO Air India';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passanger = 'raHuL';
const passangerLowerCase = passanger.toLowerCase();
const correctName =
  passangerLowerCase[0].toUpperCase() + passangerLowerCase.slice(1);
console.log(correctName);

//Comparing Email

const email = 'abhishek.sharma@bcci.com';
const loginEmail = ' Abhishek.Sharma@bcci.com \n';
const correctEmail = loginEmail.toLowerCase().trim();
console.log(correctEmail);
console.log(email === correctEmail);

//replacing

const priceUK = '288,97£';
const priceUS = priceUK.replace('£', '$').replace(',', '.');

console.log(priceUS);

const annoucement =
  'All passangers are requested to come boarding door 23, boarding door 23!';
// console.log(annoucement.replaceAll('door', 'gate'));
console.log(annoucement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus Air320neo';

console.log(plane.includes('Air'));
console.log(plane.includes('boeing'));
console.log(plane.startsWith('Airbus'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`part of the new airbus family`);
}

//exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are not allowed  on board');
  } else {
    console.log('welcome to aboard!');
  }
};
checkBaggage('I have laptop, some food and pocket Knife');
checkBaggage('socks and camera');
checkBaggage('I carry snacks and gun for protection');

//split and join
console.log('a+very+nice+string'.split('+'));
console.log('Tilak Verma'.split(' '));

const [firstName, lastName] = 'Rinku Rajguru'.split(' ');

const newName = console.log(
  ['Mr.', firstName, lastName.toUpperCase()].join(' '),
); */

// Working With Strings - Part 3

/* const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameCaps = [];
  console.log(names);

  for (let n of names) {
    // nameCaps.push(n[0].toUpperCase() + n.slice(1));
    nameCaps.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameCaps.join(' '));
};

capitalizeName('rohit sharma ritika sharma');
capitalizeName('akashdeep singh');

//padding
const message = 'go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Ravindra'.padStart(20, '-').padEnd(30, '-'));

const maskCreditCard = function (number) {
  let str = number + '';
  let mask = str.slice(-4);
  return mask.padStart(str.length, '*');
};

console.log(maskCreditCard(2323224));
console.log(maskCreditCard(12273487328));
console.log(maskCreditCard(79082890127));

//repeat
const message1 = `Bad wheather... All departures ar delayed!`;

console.log(message1.repeat(5));
const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInline(2);
planesInline(7);
planesInline(11);
 */

/* Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

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

GOOD LUCK 😀 */

/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// underscore_case //underscore_Case
//  first_name  //firstName
// Some_Variable
//   calculate_AGE
// delayed_departure

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const rows = text.split('\n');
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    // console.log(row);
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
}); */

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
// console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = console.log(
    `${type.startsWith('_Delayed') ? '⛔' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
      50,
    ),
  );
}
