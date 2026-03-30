//Activating strict mode
/* 'use strict'
let isHavingDrivingLicense = false;
const isTestPassed = true;

if (isTestPassed) isHavingDrivingLicense = true
if (isHavingDrivingLicense) console.log(`Yashaswi can drive the car :D`)

// let interface = 'sound';
// let private = 10; */

//Functions
/* function print() {
    console.log(`my name is nn`);
}
// function calling/invoking/running
print();
print();
print();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applesJuice = fruitProcessor(4, 0);
console.log(applesJuice);

const appleOrangeJuice = fruitProcessor(2, 7);
console.log(appleOrangeJuice);

const num = Number('23') //Number is inbuilt method */

//Function Declarations vs Expressions

//function declarations

/* function calcAge(birthYear) {
    return 2026 - birthYear;
}
const age = calcAge(1989);

//function expressions
const calcAge1 = function (birthYear) {
    return 2026 - birthYear;
}
const age1 = calcAge1(1989)

console.log(age, age1) */

//Arrow Functions

/* const calcAge2 = birthYear => 2026 - birthYear;

const age2 = calcAge2(1990);

console.log(age2);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age3 = 2026 - birthYear;
    const retirement = 60 - age3;
    return `${firstName} retires in ${retirement} years`;
}

const retirementInfo = yearsUntilRetirement(1990, 'NN');
console.log(retirementInfo);

const retirementInfo1 = yearsUntilRetirement(1974, 'NM');
console.log(retirementInfo1); */

//Functions calling another Functions
/* function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePIeces = fruitCutter(oranges);
    const juice = `juice with ${applePieces} pieces of apples and ${orangePIeces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 4));
console.log(fruitProcessor(1, 3));
 */

//Reviewing Funtions

// const calcAge = function (birthYear) {
//     return 2026 - birthYear;
// };

// function retirementYears(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 60 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement}`)
//         return retirement;
//     }
//     else {
//         console.log(`${firstName} has already retired🎉`)
//         return -1;
//     }

// }

// console.log(retirementYears(1990, 'john'))
// console.log(retirementYears(1961, 'tom'))

//Coding Challenge #1
/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
GOOD LUCK
�
�
😉  */

/* const calcAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
    }

    else {
        console.log(`No team wins...`)
    }
}
checkWinner(scoreDolphins, scoreKoalas); */

//Introduction to arrays

/* let friend1 = 'Rohit';
let friend2 = 'Virat';
let friend3 = 'Anuska';
let friend4 = 'Ritika'
const friends = ['Rohit', 'Virat', 'Anushka', 'Ritika'];
console.log(friends);

const years = new Array(1990, 1972, 1980, 2000);
console.log(years);

console.log(friends[0], friends[3]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Aliya';
console.log(friends);
// friends = ['Raju', 'Captain'];
// console.log(friends);

const firstName = 'Kuldeep';
const myDetails = [firstName, 'Yadav', 2026 - 1990, 'cricketer', friends]
console.log(myDetails);
console.log(myDetails.length); */

//exercise

/* const calcAge = function (birthYear) {
    return 2026 - birthYear;
}

const years = [1990, 1972, 1965, 2000, 1999];
const age1 = calcAge(years[1]);

const age2 = calcAge(years[0]);
const age3 = calcAge(years[3]);
const age4 = calcAge(years[years.length - 1]);
const ages = [age1, age2, age3, age4];
console.log(ages); */

//Basic Array Operations(Methods)
/* const friends = ['Rohit', 'Ritika', 'Virat', 'Rahul', 'Shubhman'];

//Add elements
const newLength = friends.push('Ishan');
console.log(friends);
console.log(newLength);

friends.unshift('Tilak');
console.log(friends);

//Remove elements

const popped = friends.pop(); //last
console.log(friends);
console.log(popped);

const removedEle = friends.shift();
console.log(friends);
console.log(removedEle);

console.log(friends.indexOf('Ritika'));
console.log(friends.indexOf('Anushka'));

console.log(friends.includes('Virat'));
console.log(friends.includes('Rinku'));

friends.push(23);
console.log(friends.includes(23)); //strictly checks */

// Coding Challange#2
/* Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// }

// // const calcTip = function (bill) {

// //     if (bill >= 50 && bill <= 300) {
// //         return bill * (15 / 100);
// //     }

// //     else {
// //         return bill * (20 / 100)
// //     }

// // }


// // const tip1 = calcTip(bills[0]);
// // const tip2 = calcTip(bills[1]);
// // const tip3 = calcTip(bills[2]);
// // const tips = [tip1, tip2, tip3]
// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

//Introduction to Objects

/* const myDetails = [
    'Virat',
    'Kohali',
    2026 - 1989,
    'Cricketer',
    ['Anushka', 'Rohit', 'Siraj', 'MS']
]
console.log(myDetails, typeof (myDetails));

const myInfo = {
    firstName: 'Virat',
    lastName: 'Kohali',
    age: 2026 - 1989,
    job: 'Cricketer',
    friends: ['Anushka', 'Rohit', 'Siraj', 'MS'],
}
console.log(myInfo, typeof (myInfo)); */

// Dot. vs Bracket Notation
/* const myInfo = {
    firstName: 'Virat',
    lastName: 'Kohali',
    age: 2026 - 1989,
    job: 'Cricketer',
    friends: ['Anushka', 'Rohit', 'Siraj', 'MS'],
}

console.log(myInfo.lastName);
console.log(myInfo['lastName']);

const nameKey = 'Name';
console.log(myInfo['first' + nameKey]);
console.log(myInfo['last' + nameKey]);
// console.log(myInfo.'first' + nameKey)

const interestedIn = prompt(`What do you want to know about ${myInfo.firstName}? Choose between first name, last name, age, job and friends.`)

console.log(interestedIn);
//console.log(myInfo.interestedIn);
//console.log(myInfo[interestedIn]);

if (myInfo[interestedIn]) {
    console.log(myInfo[interestedIn]);
}
else {
    console.log(`Wrong request! Choose between first name, last name, age, job and friends.`)
}

myInfo.location = 'delhi';
myInfo['x'] = 'virat@x'

console.log(myInfo)
//challange
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${myInfo.firstName} has ${myInfo.friends.length} friends, and his best friend is called ${myInfo.friends[0]}`) */

//Object Methods

/* const myInfo = {
    firstName: 'Virat',
    lastName: 'Kohali',
    birthYear: 1989,
    job: 'Cricketer',
    friends: ['Anushka', 'Rohit', 'Siraj', 'MS'],
    // calAge: function (birthYear) {
    //     return 2026 - birthYear;
    // }
    // calAge: function () {
    //     return 2026 - this.birthYear;
    // }

    calAge: function () {
        this.age = 2026 - this.birthYear;
        return this.age;
    },
    hasDrivingLicens: false,

    getSummary: function () {
        return `${this.firstName} is a ${this.calAge()}-year old ${myInfo.job}, and he has ${myInfo.hasDrivingLicens ? 'a' : 'no'} driver's license"}`;
    }
}

// console.log(myInfo.calAge(1989))
// console.log(myInfo['calAge()'])
console.log(myInfo.calAge())
// console.log(myInfo.age)
// console.log(myInfo.age);
// console.log(myInfo['age']);


// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(myInfo.getSummary())
 */

//Coding Challenge #3
/* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

/* const mark = {
    // firstName: 'Mark',
    // lastName: 'Miller',
    // fullName: function(){
    //     return `${this.firstName} ${this.lastName}`
    // },
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}

const john = {
    // firstName: 'john',
    // lastName: 'Smith',
    // fullName: function(){
    //     return `${this.firstName} ${this.lastName}`
    // },
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}!`)
}
else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName()}'s BMI ${john.bmi} is higher than ${mark.fullName()}'s ${mark.bmi}!`)
}

 */


//Iteration: The for Loop

// console.log('Lifting weights repition 1🏋️');
// console.log('Lifting weights repition 2🏋️');
// console.log('Lifting weights repition 3🏋️');
// console.log('Lifting weights repition 5🏋️');
// console.log('Lifting weights repition 6🏋️');
// console.log('Lifting weights repition 7🏋️');
// console.log('Lifting weights repition 8🏋️');
// console.log('Lifting weights repition 9🏋️');
// console.log('Lifting weights repition 10🏋️');
// console.log('Lifting weights repition 11🏋️');

// for (let rep = 1; rep <= 11; rep++) {
//     console.log(`Lifting weights repition ${rep}🏋️`);
// }

//Looping Arrays, Breaking and Continuing

// const myDetails = [
//     'Virat',
//     'Kohali',
//     2026 - 1989,
//     'Cricketer',
//     ['Anushka', 'Rohit', 'Siraj', 'MS']
// ]

// console.log(myDetails[0]);
// console.log(myDetails[1]);
// ...
// console.log(myDetails[4])
// let types = [];
// for (let i = 0; i < myDetails.length; i++) {
//     //Reading from array
//     console.log(myDetails[i], typeof (myDetails[i]));

//     //Filling array
//     // types[i] = typeof (myDetails[i]);
//     types.push(typeof (myDetails[i]));
// }
// console.log(types)

// let ages = [];
// years = [1989, 1942, 1972, 1947, 1983];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2026 - years[i])
// }
// console.log(ages)

/*
//Only string
for (let i = 0; i < myDetails.length; i++) {
    if (typeof myDetails[i] !== 'string') continue;
    console.log(myDetails[i], typeof (myDetails[i]));
}

//break with number
for (let i = 0; i < myDetails.length; i++) {
    if (typeof myDetails[i] == 'number') break;
    console.log(myDetails[i], typeof (myDetails[i]));
} */


// Looping Backwards and Loops in Loops


/* const myDetails = [
    'Virat',
    'Kohali',
    2026 - 1989,
    'Cricketer',
    ['Anushka', 'Rohit', 'Siraj', 'MS'],
    true
]

for (let i = myDetails.length - 1; i >= 0; i--) {
    console.log(myDetails[i])
} */
/*
for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`Starting excercise-- ${excercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${excercise}: Weight lifiting repition ${rep}`)

    }
} */

//The while Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifiting weights repition ${rep} 🏋️‍♂️`)
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifiting weights repition ${rep} 🏋️‍♂️`)
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`you roll a dice ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log(`Loop is about to end..`)
//     }
// };

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    // console.log(tips);

    totals.push(tips[i] + bills[i])

}
console.log(bills, tips, totals)


function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum / arr.length
}
console.log(calcAverage(bills));
console.log(calcAverage(tips))
console.log(calcAverage(totals))