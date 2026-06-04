**Generate Random Numbers in JavaScript**

JavaScript provides:
Math.random()
It returns a random decimal number between:
0 (inclusive) and 1 (exclusive)

Example:
console.log(Math.random());

Output:
0.7345234
0.1289342
0.9871231

🎲 Random Dice Number (1 to 6)
const dice = Math.floor(Math.random() \* 6) + 1;

console.log(dice);
How it works
Math.random() \* 6

Generates:
0 <= number < 6

Then:
Math.floor(...)

Converts it to:
0, 1, 2, 3, 4, 5

Finally:

- 1

Makes it:

1, 2, 3, 4, 5, 6

🔢 Random Number Between Two Numbers
Formula
Math.floor(Math.random() \* (max - min + 1)) + min
Example: Random Number Between 10 and 20
const min = 10;
const max = 20;

const randomNum =
Math.floor(Math.random() \* (max - min + 1)) + min;

console.log(randomNum);

Possible Output
10, 11, 12, ..., 20

Reusable Function
function getRandomNumber(min, max) {
return Math.floor(Math.random() \* (max - min + 1)) + min;
}
console.log(getRandomNumber(10, 20));
console.log(getRandomNumber(100, 500));

Random Decimal Number Between Two Numbers
function getRandomDecimal(min, max) {
return Math.random() \* (max - min) + min;
}

console.log(getRandomDecimal(1, 10));

Output:
5.3478
8.9123

--Dice Function
function rollDice() {
return Math.floor(Math.random() \* 6) + 1;
}

console.log(rollDice());

🧠 Quick Cheat Sheet
| Requirement | Formula |
| ------------------------ | --------------------------------------------------- |
| Random decimal (0–1) | `Math.random()` |
| Dice (1–6) | `Math.floor(Math.random() * 6) + 1` |
| Random integer (min–max) | `Math.floor(Math.random() * (max - min + 1)) + min` |
| Random decimal (min–max) | `Math.random() * (max - min) + min` |

One-Liner

Math.random() generates a value between 0 and 1, and we combine it with Math.floor() and arithmetic to generate random integers within a desired range.

**Rounding Decimals in JavaScript**
JavaScript provides several methods for rounding numbers.

1. Math.round()
   Rounds to the nearest integer.
   console.log(Math.round(4.4)); // 4
   console.log(Math.round(4.5)); // 5
   console.log(Math.round(4.9)); // 5 2.

2. Math.floor()
   Always rounds down.
   console.log(Math.floor(4.9)); // 4
   console.log(Math.floor(4.1)); // 4 3.

3. Math.ceil()
   Always rounds up.
   console.log(Math.ceil(4.1)); // 5
   console.log(Math.ceil(4.9)); // 5 4.

4. Math.trunc()
   Removes the decimal part completely.
   console.log(Math.trunc(4.9)); // 4
   console.log(Math.trunc(-4.9)); // -4 5. Round to N Decimal Places

5. Using toFixed()
   const num = 23.4567;
   console.log(num.toFixed(2));
   Output:
   23.46

⚠️ toFixed() returns a string.
console.log(typeof num.toFixed(2)); // "string"
Convert back to number if needed:
const rounded = Number(num.toFixed(2)); 6. Using Math.round() for Decimal Places
Round to 2 decimal places:
const num = 23.4567;
const rounded = Math.round(num \* 100) / 100;
console.log(rounded);
Output:
23.46

Why?
23.4567 _ 100 = 2345.67
Math.round(2345.67) = 2346
2346 / 100 = 23.46 7. Generic Function
function roundTo(num, decimals) {
return Math.round(num _ 10 ** decimals) / 10 ** decimals;
}
console.log(roundTo(23.4567, 2)); // 23.46
console.log(roundTo(23.4567, 3)); // 23.457

🔥 Comparison Table
| Method | Result for `4.7` |
| ----------------- | ---------------- |
| `Math.round(4.7)` | 5 |
| `Math.floor(4.7)` | 4 |
| `Math.ceil(4.7)` | 5 |
| `Math.trunc(4.7)` | 4 |

For -4.7:
Method Result
Math.round(-4.7) -5
Math.floor(-4.7) -5
Math.ceil(-4.7) -4
Math.trunc(-4.7) -4

🎯 Important
JavaScript provides Math.round() for nearest integer, Math.floor() for rounding down, Math.ceil() for rounding up, and Math.trunc() for removing decimals. To round to a specific number.

**setTimeout and setInterval in javascript**
setTimeout() in JavaScript:
setTimeout() executes a function once after a specified delay.

Syntax
setTimeout(function, delay);
Example
setTimeout(() => {
console.log("Executed after 2 seconds");
}, 2000);

Output after 2 seconds:
Executed after 2 seconds

Cancel a Timeout
const timerId = setTimeout(() => {
console.log("Hello");
}, 5000);
clearTimeout(timerId);

setInterval() in JavaScript:
setInterval() executes a function repeatedly at a specified interval.

Syntax
setInterval(function, interval);
Example
setInterval(() => {
console.log("Runs every 2 seconds");
}, 2000);

Output:
Runs every 2 seconds
Runs every 2 seconds
Runs every 2 seconds
...
Stop an Interval
const intervalId = setInterval(() => {
console.log("Running...");
}, 1000);

setTimeout(() => {
clearInterval(intervalId);
}, 5000);
This runs every second and stops after 5 seconds.

Example: Digital Clock
setInterval(() => {
console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout vs setInterval
| Feature | setTimeout | setInterval |
| ----------- | -------------------- | ----------------------- |
| Execution | Once | Repeatedly |
| Delay | After specified time | Every specified time |
| Stop Method | `clearTimeout()` | `clearInterval()` |
| Use Case | Delayed action | Polling, clocks, timers |

Common Question:
Can setInterval be implemented using setTimeout?

Yes:
function repeat() {
console.log("Running...");
setTimeout(repeat, 1000);
}
setTimeout(repeat, 1000);
