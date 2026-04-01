// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// let x = '123';

// let age = birthYear => 2026 - birthYear;
// console.log(age(1987));

// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understandding the Problem
// - How to calculate temparature amlitude? Ans- The difference between max and min values in temp for a duration
// - What is sensor error? what to do with it
// - How to calculate max and min values ?

// 2) Breaking up into sub-problems
// - How to ignore erros?
// - Find max value in temp Array.
// - Find min value in temp Array.
// - Return a difference between max and min value as an Amplitude

/* const calcAmplitude = function (tempArray) {
  let max = tempArray[0];
  let min = tempArray[0];
  for (let i = 0; i < tempArray.length; i++) {
    let curTemp = tempArray[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcAmplitude(temperatures);
console.log(amplitude); */

// Problem - 2
// Function should now receive to arrays

// 1. Understanding the problem
// With 2 arrays, should we impement functionality twice? No! just merge two arrays.

// 2. Breaking up into sub-problems
// Merge 2 arrays and return a single array

/* const calcAmplitude = function (t1, t2) {
  const tempArray = t1.concat(t2);
  console.log(tempArray);
  let max = tempArray[0];
  let min = tempArray[0];
  for (let i = 0; i < tempArray.length; i++) {
    let curTemp = tempArray[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcAmplitude([1, 2, 3, 4], [5, 6, 7, 8, 9]);
console.log(amplitude); */

// Debugging with the Console and Breakpoints

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celcius',
    //FIX
    value: Number(prompt('Degree celcius:')),
  };
    //FIND
    //console.log(measurement);
    //console.warn(measurement)
    //console.error(measurement)
  console.table(measurement);
    //console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
    //IDENTIFY
console.log(measureKelvin()); */

//using debugger
/* const bugAmplitude = function (t1, t2) {
  const tempArray = t1.concat(t2);
  console.log(tempArray);
  let max = 0;
  //find
  let min = 0;
  debugger;
  for (let i = 0; i < tempArray.length; i++) {
    let curTemp = tempArray[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = bugAmplitude([1, 2, 3, 4], [5, 6, 7, 8, 9]);
//Identify
console.log(amplitude); */

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Understanding the Problem
// - Given temprature array transform into string, seprated by ...
// - What is the X day, Index+1

//Breaking up into sub-problem
// - transform the array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

// const arr = [17, 21, 23];
/* const arr = [12, 5, -5, 0, 4];
console.log(`... ${arr[0]}ºC ... ... ${arr[1]}ºC ... ... ${arr[2]}ºC ...}`);
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ... ${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log(str);
};
printForecast(arr); */

///////////////////////////////////////
// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// Understanding the problem
// - Calculate the total hrs, avg hrs, day with max hrs, todal days worked.
// - Check where week is completed with enough hours

// Breaking up into sub-problems
// - Calulate total hrs
// - Calculate avg hrs
// - Find day with max hrs
// - Claculate tottal days worked
// - Check number of hrs completed for a week
// const arr = [7.5, 8, 6.5, 0, 8.5, 4, 10];
// const CalcHrs = function (arr) {
//   let sum = 0;
//   let maxHours = 0;
//   let totalDays = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (arr[i] > maxHours) {
//       maxHours = arr[i];
//     }
//     if (arr[i] > 0) totalDays = i + 1;
//   }
//   let averageHours = sum / arr.length;
//   console.log(`
//     totalHrs-- ${sum},
//     averageHours-- ${averageHours},
//     maxHours-- ${maxHours}, totalDays-- ${totalDays},
//     ${sum >= 35 ? 'Weekly working hrs are fullfilled ' : 'Hrs are not fullfilled'}

//   `);
// };

// CalcHrs(arr);
// function weeklyTimeAnalyzer(hours) {
//   const days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ];

//   let totalHours = 0;
//   let maxHours = hours[0];
//   let maxDay = days[0];
//   let daysWorked = 0;

//   for (let i = 0; i < hours.length; i++) {
//     totalHours += hours[i];

//     // Count days worked (non-zero)
//     if (hours[i] > 0) {
//       daysWorked++;
//     }

//     // Find max hours day
//     if (hours[i] > maxHours) {
//       maxHours = hours[i];
//       maxDay = days[i];
//     }
//   }

//   const averageHours = totalHours / hours.length;
//   const isFullTime = totalHours >= 35;

//   return {
//     totalHours,
//     averageHours,
//     mostWorkedDay: maxDay,
//     daysWorked,
//     isFullTime,
//   };
// }

// // Test Data
// const result = weeklyTimeAnalyzer([7.5, 8, 6.5, 0, 8.5, 4, 0]);
// console.log(result);
