
// Linking javascript file to html
/*
let js = 'amazing';
// if (js === 'amazing') alert('Javascript is a FUN!');
console.log(35 + 45 - 5 + 25); */


// Values and variables
/* console.log(10 + 17);
console.log('Virat');
console.log(true);

let firstName = 'Rohit';
console.log(firstName);

first_name = 'Shryas';
console.log(first_name);

let country = 'India';
let continent = 'Asia';
let population = 1.4;

console.log(country);
console.log(typeof (country))
console.log(continent);
console.log(typeof (continent));
console.log(population + 'billion');
console.log(typeof (population)); //number

population = '14 milllion'
console.log(typeof (population)) //string */

//single line comment

// let x = 5; // Declare x and assign value 5
// console.log(x); // Print x to console

/*
  This is a multi-line comment.
  It can span multiple lines.
*/
// let y = 10;
// console.log(y);

//Data Types
/* let isIsland = false; //
console.log(typeof (isIsland)); //boolean

let language = 'Marathi';
console.log(typeof (language)); //string

let myVal;
console.log(typeof (myVal)); //undefined

let emptyVal = null;
console.log(typeof (emptyVal)); //object */

//non-primitive data type
/* const person = {
    firstName: 'Virat',
    lastName: 'Kohli',
    age: 38
}

console.log(typeof (person));//object */


// let, const, var
/* let age = 30;
age = 31;
console.log(age)

const birthYear = 1990;
// birthYear = 1991;
console.log(birthYear);

var job = 'programmer';
job = 'teacher';
console.log(job);

let myLanguage = 'Marathi'; //let variable can not be redeclared, but can be reassigned diff value
console.log(myLanguage);
myLanguage = 'English';
console.log(myLanguage)

const independence = 1947; //const variable can not be redeclared and reassiged
console.log(independence);

var myFood = 'Kachori'; //var variable can be redeclared and reassigned
console.log(myFood);
var myFood = "Samosa"
console.log(myFood); */


//Basic operators
//Math Operators

/* let totalPopulation = 14;

let addition = 10 + 15;
console.log(addition) //addition

let substraction = 10 - 5; //substraction
console.log(substraction);

let multplication = 10 * 10; //multiplication
console.log(multplication);

let division = 10 / 2; //devision
console.log(division)

let exponentional = 10 ** 2; //exponential
console.log(exponentional
)



console.log(totalPopulation / 2); // population equally in south and north

totalPopulation++; //increment
console.log(totalPopulation); */

//comaprison operators
/*
console.log(totalPopulation > 6);

console.log(totalPopulation < 33);
let myAge = 38;
console.log(myAge >= 18);

let yourAge = 7;
console.log(yourAge <= 18)

let description = country + ' ' + 'is in' + ' ' + continent + ' ' + 'and its population is' + ' ' + population

console.log(description) */


//assignment operators

/* addition += 10;
console.log(addition);

addition++; //increment
console.log(addition);

substraction--; //decrement
console.log(substraction)

multplication *= 4;
console.log(multplication); */


//operator precendence
/* let now = 2026;
let ageVirat = now - 1988;
let ageAnushka = now - 1991;
console.log(now - 1988 > now - 1991)

let a, b;
a = b = 25 + 10 - 5; //a=b=30; a =30;
console.log(a, b)

const averageAge = (ageVirat + ageAnushka) / 2
console.log(ageVirat, ageAnushka, averageAge) */

// Coding Challenge #1
/* Mark and John are trying to compare their BMI (Body Mass Index), which is
 calculated using the formula:
 BMI = mass / height ** 2 = mass / (height * height) (mass in kg
 and height in meter).

 Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
/* let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const massMark1 = 95;
const heightMark1 = 1.88;
const massJohn1 = 85;
const heightJohn1 = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHeigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHeigherBMI);

const BMIMark1 = massMark1 / heightMark1 ** 2;
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
const markHeigherBMI1 = BMIMark1 > BMIJohn1;
console.log(BMIMark1, BMIJohn1, markHeigherBMI1); */

//strings & template literals

/* let firstName = "Rishabh";
job = 'Cricketer';
birthYear = 1995;
year = 2026;

console.log("I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!');
console.log(`I'm ${firstName}, a ${year - birthYear} years old ${job}!`);
console.log(`this is a string...`);
console.log(`this is a
    multiline
    example`) */



//if-else statement

/* let age = 15;
if (age >= 18) {
    console.log(`Yashaswi can start driving the car🚗`);
}
else {
    console.log(`Yahsswi is too young, he need to wait another ${18 - age} years!`);
}

let birthYear = 2019;

let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century); */

//Coding Challenge #2
/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statemen */


/* // const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
}
else {
    console.log("John's BMI is higher than Mark's!")
}

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
}
else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
} */


//type conversion

/* let birthYear = '1990';
console.log(Number(birthYear), birthYear);
console.log(Number(birthYear) + 18);

console.log(Number('Rishabh'));
console.log(typeof (NaN));

console.log(String(23), 23); */

// type coercion
/* console.log('I am ' + 35 + ' years old.');

console.log('40' - '25' - 10);
console.log('10' * '4');
console.log('16' / '4');

n = '10' + 1 //101
n = n - 1;
console.log(n); */

//truthy and falsy values

//5 falsy values - 0, '', undefined, null, NaN
/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean('undefined'))


const money = 0;
if (money) {
    console.log(`Don't spend it all`);
}
else {
    console.log(`you should get a job`);
}

let height;
if (height) {
    console.log(`Yay! height is defined`);
}
else {
    console.log(`your height is UNDEFINED`);
} */


//Equality operators, == vs. ===
/* const age = '18';
if (age === 18) console.log(`you just became an adult :D (strict)`);
if (age == 18) console.log(`you just became an adult: D (loose)`);

const favourite = Number(prompt(`what is your favourite number`));
console.log(favourite, typeof favourite)

if (favourite === 79) {
    console.log(`Cool! 79 is am amazing`);
}
else if (favourite === 2) {
    console.log(`Cool! 2 is also an amazing number`);
}
else if (favourite === 7) {
    console.log(`Cool! 7 is also an amazing number`);
}
else if (favourite === 9) {
    console.log(`Cool! 9 is also an amazing number`);
}
else if (favourite === 11) {
    console.log(`Cool! 11 is also an amazing number`);
}
else {
    console.log(`number is not 79, 2, 7, 9 or 11`);
}

if (favourite !== 79) console.log(`why not 79!`); */


//logical operator

// const hasDrivingLicense = true;
// const hasGoodVision = true;

/* if (hasDrivingLicense && hasGoodVision) {
    console.log(`Smriti can drive!`);
}
else {
    console.log(`someone else should drive...`)
}
 */
/* const isTired = false;
if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log(`Smriti can drive!`);
}
else {
    console.log(`someone else should drive...`)
} */

// Coding Challange #3
/* There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks
�
�
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106  */

// const scoreDolphins = (97 + 112 + 101) / 3;

// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy🏆");
// }

// else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy🏆");
// }
// else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log("Both win the trophy🏆");
// }
// else {
//     console.log("No one win the trophy")
// }

// the switch statement

/* let day = 'monday';

switch (day) { //day === 'monday'
    case 'monday': console.log('Prepare roadmap to for forntend devlopment');
        console.log('Practice JS, RaactJS and DSA for frondend development');
        break;
    case 'tuesday': console.log('attend coding hackthon');
        break;
    case 'wednesday':
    case 'thursday': console.log('practice coding example');
        break;
    case 'friday': console.log('work on project');
        break;
    case 'saturday':
    case 'sunday': console.log('enjoy weekend');
        break;
    default: console.log('day is not valid');
} */

/* if (day === 'monday') {
    console.log('Prepare roadmap to for forntend devlopment');
    console.log('Practice JS, RaactJS and DSA for frondend development');
}
else if (day === 'tuesday') {
    console.log('attend coding hackthon');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('practice coding example');
}
else if (day === 'friday') {
    console.log('work on project');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy weekend');
}
else {
    console.log('day is not valid');
} */

//// Statements and Expressions
/* 3 + 4
1991
true && false && !false
if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Nav'
console.log(`i am ${2026 - 1990} years old ${me}`)

 */

//The Conditional (Ternary) Operator

/* let age = 14;
// age >= 18 ? console.log(`i like to drink wine🍷`) : console.log(`i like to drink water💧`);

const drink = age >= 18 ? 'wine🍷' : 'water💧';
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = 'wine🍷'
}
else {
    drink2 = 'water💧'
}
console.log(drink2)

console.log(`i like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`) */


// Coding Challenge #4 

/* Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%. 
Your tasks: 
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement 

(If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!) 
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25” 
Test data: 
§ Data 1: Test for bill values 275, 40 and 430 
*/

/* const bill = 430;

const tip = bill > 50 && bill <300? bill *(15/100) : bill * (20/100);
console.log(tip)

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`) */
