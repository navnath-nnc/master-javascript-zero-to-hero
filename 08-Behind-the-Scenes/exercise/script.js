'use strict';
//Scoping practice
/* function calcAge(birthYear) {
  const age = 2026 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age},  born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating new variable with same name as outer scope variable;
      const firstName = 'Rohit';
      const str = `oh! you are a millenial, ${firstName}`;
      console.log(str);

      //reassigning outer scope variable
      output = 'new output';

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(str);
    console.log(output);
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}
const firstName = 'Virat';
calcAge(1991);

// console.log(age);
// printAge();
/////////////////////////////////////////////////
//Variable Environment: Hoisting and Temporal Dead Zone

console.log(me);
// console.log(str);
// console.log(num);

var me = 'Jaddu';
let str = 10;
const num = 10;

console.log(add(2, 3));
// console.log(addExp(2, 3));

// console.log(addArrow(2, 3));
// console.log(addArrow);

function add(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

console.log(undefined);
if (!products) deleteShoppingCart();

var products = 10;
function deleteShoppingCart() {
  console.log('deleted all products');
}

var x = 10;
let y = 20;
const z = 30;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); */

///////////////////////////////////////////////////////////
//this keyword
/* console.log(this);

const calcAge = function (birthYear) {
  console.log(2026 - birthYear);
  console.log(this);
};
calcAge(1989);

const calcAgeArrow = birthYear => {
  console.log(2026 - birthYear);
  console.log(this);
};
calcAgeArrow(1990);

const person = {
  year: 1988,
  calcAge: function () {
    console.log(2026 - this.year);
    console.log(this);
  },
};
person.calcAge();

const newPerson = {
  year: 1999,
};

newPerson.calcAge = person.calcAge;
newPerson.calcAge();

const f = person.calcAge;

console.log(f()); */

///////////////////////////////////////////////////////

// Regular Functions vs. Arrow Functions
/* // let firstName = 'Rohit';
const obj = {
  firstName: 'Virat',
  birthYear: 1988,
  calcAge: function () {
    // console.log(this);
    console.log(2026 - this.birthYear);
    //solution1 using self
    // let self = this;
    // const millenial = function () {
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    // };

    //solution2 using arrow function
    const millenial = () => {
      //   console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    millenial();
  },

  greet: () => {
    // console.log(this);
    console.log(`hi ${firstName}`);
  },
};
obj.calcAge();
obj.greet(); */

//arguments keyword

/* const addExp = function (a, b) {
  console.log(arguments);
  console.log(a + b);
};
// addExp(2, 3);
addExp(2, 3, 4, 7);

const addArrow = (a, b) => {
  console.log(arguments);
  console.log(a + b);
};

addArrow(2, 3); */

/////////////////////////////////
// object refrences(shallow copy vs deep copy)

// const anushka1 = {
//   firstName: 'Anushka',
//   lastName: 'Sharma',
//   age: 35,
// };

// function marriedPerson(originalInfo, newLastName) {
//   originalInfo.lastName = newLastName;
//   return originalInfo;
// }

// const marrriedAnushka = marriedPerson(anushka1, 'Kohli');
// console.log('before:', anushka1);
// console.log('after:', marrriedAnushka);

/* const anushka = {
  firstName: 'Anushka',
  lastName: 'Sharma',
  age: 35,
  family: ['virat', 'vamika'],
};

//shallow copy
const anushkaCopy = { ...anushka };
anushkaCopy.lastName = 'kohali';

anushkaCopy.family.push('vaman');
anushkaCopy.family.push('rohit');
// console.log('before', anushka);
// console.log('after', anushkaCopy);

//deep copy/clone

const anushkaClone = structuredClone(anushka);

anushkaClone.family.push('ritika');
anushkaClone.family.push('hardik');

console.log('before', anushka);
console.log('after', anushkaClone); */
