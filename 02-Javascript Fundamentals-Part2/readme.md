**Strict Mode in JavaScript**

Definition:
Strict mode is a feature in JavaScript that enables a stricter set of rules for writing code, helping you catch errors and write safer, cleaner programs.

🔹 How to Enable Strict Mode

You can enable it by adding "use strict" at the top of a file or function:

"use strict";

x = 10; // ❌ Error (variable not declared)
🔹 Key Features of Strict Mode
1. No Undeclared Variables
"use strict";
x = 5; // ❌ Error
2. Prevents Duplicate Parameters
"use strict";
function test(a, a) { // ❌ Error
  return a;
}
3. Makes this Safer
In strict mode, this is undefined in functions (not global object)
4. Disallows Certain Bad Practices
Cannot delete variables
Restricts use of reserved keywords
"use strict";
delete x; // ❌ Error
5. Silent Errors Become Visible
Mistakes that were ignored before now throw errors
🔹 Example Comparison

Without strict mode:

x = 10; // allowed (bad practice)

With strict mode:

"use strict";
x = 10; // ❌ ReferenceError
✅ Why Use Strict Mode
Helps avoid bugs
Improves code quality
Makes debugging easier
Enforces best practices

🔹 Important Note
Modern JavaScript (ES6 modules, classes) uses strict mode by default

**Functions in JavaScript**

Definition:
A function in JavaScript is a reusable block of code designed to perform a specific task. It runs only when it is called (invoked).

🔹 Why Use Functions
Avoid repeating code
Make code reusable
Improve readability and structure
🔹 1. Function Declaration

Definition: A named function defined using the function keyword.

function greet() {
  console.log("Hello!");
}

greet(); // calling the function
🔹 2. Function with Parameters

Definition: Functions can take inputs (parameters).

function greet(name) {
  console.log("Hello " + name);
}

greet("John");
🔹 3. Function with Return Value

Definition: Functions can return a value using return.

function add(a, b) {
  return a + b;
}

let result = add(2, 3); // 5
🔹 4. Function Expression

Definition: A function stored inside a variable.

const greet = function () {
  console.log("Hi!");
};
🔹 5. Arrow Function (ES6)

Definition: A shorter syntax for writing functions.

const add = (a, b) => a + b;
🔹 6. Anonymous Function

Definition: A function without a name.

setTimeout(function () {
  console.log("Hello");
}, 1000);
🔹 Key Concepts
Function Call (Invoke): Running the function → greet()
Parameters vs Arguments:
Parameters → variables in function definition
Arguments → actual values passed


**Function Declaration vs Function Expression in JavaScript**
🔹 Function Declaration

Definition: A function declaration defines a named function using the function keyword.

function greet() {
  console.log("Hello");
}
✅ Features:
Must have a name
Hoisted (can be called before it is defined)
Declared as a separate statement

Example (Hoisting):

greet(); // works

function greet() {
  console.log("Hello");
}
🔹 Function Expression

Definition: A function expression is when a function is assigned to a variable.

const greet = function () {
  console.log("Hello");
};
✅ Features:
Can be anonymous (no name)
Not hoisted (cannot be used before definition)
Treated like a value

Example:

greet(); // ❌ Error

const greet = function () {
  console.log("Hello");
};

**Arrow Functions in JavaScript**

Definition:
Arrow functions are a shorter and more concise way to write functions in JavaScript, introduced in ES6. They use the => (arrow) syntax.

🔹 Syntax
const functionName = (parameters) => {
  // code
};
🔹 Examples
1. Basic Arrow Function
const greet = () => {
  console.log("Hello");
};
2. With Parameters
const greet = (name) => {
  console.log("Hello " + name);
};
3. Implicit Return (Short Form)

👉 If there is only one expression, return is automatic

const add = (a, b) => a + b;
4. Single Parameter (No Brackets)
const square = x => x * x;

**Function Calling Another Function in JavaScript**

Definition:
When one function calls (invokes) another function inside it, it is called function calling another function. This helps break code into smaller, reusable parts.

🔹 Basic Example
function greet() {
  console.log("Hello");
}

function welcome() {
  greet(); // calling another function
  console.log("Welcome!");
}

welcome();

👉 Output:

Hello
Welcome!
🔹 Example with Return Values
function add(a, b) {
  return a + b;
}

function displaySum() {
  let result = add(2, 3); // calling add()
  console.log(result);
}

displaySum(); // 5
🔹 Why Use It
Makes code modular
Improves readability
Avoids repetition
Helps reuse functions
🔹 Real-Life Example
function getUserName() {
  return "John";
}

function greetUser() {
  let name = getUserName();
  console.log("Hello " + name);
}

greetUser();
🔹 Function Chain (Multiple Calls)
function step1() {
  console.log("Step 1");
}

function step2() {
  step1();
  console.log("Step 2");
}

function step3() {
  step2();
  console.log("Step 3");
}

step3();

**Introduction to Array**

An array in JavaScript is a special variable used to store multiple values in a single container. It’s one of the most commonly used data structures.

🔹 Creating an Array
let fruits = ["apple", "banana", "mango"];

You can also use the constructor:

let numbers = new Array(1, 2, 3, 4);
🔹 Accessing Elements

Arrays are zero-indexed (first element is index 0):

let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple
console.log(fruits[2]); // mango

**Basic Array Operations(Methods)**
🔹 Common Array Methods
1. Add elements
fruits.push("orange");    // adds to end
fruits.unshift("grape");  // adds to beginning
2. Remove elements
fruits.pop();    // removes last
fruits.shift();  // removes first
3. Find length
console.log(fruits.length);
4. Loop through array
fruits.forEach(function(item) {
  console.log(item);
});
🔹 Other Useful Methods
fruits.includes("apple");   // true/false
fruits.indexOf("banana");  // returns index
fruits.join(", ");         // convert to string
fruits.slice(1, 3);        // extract portion
fruits.splice(1, 1);       // remove/replace items

**Introduction to Arrays**
An object in JavaScript is a collection of key–value pairs used to store related data and functionality. It’s one of the most important concepts in JavaScript.

🔹 Creating an Object
1. Using object literal (most common)
let person = {
  name: "John",
  age: 25,
  isStudent: false
};

**Dot. Vs Bracket Notation**
Dot Notation
✅ What it is:

Dot notation is used to access object properties using a dot (.) followed by the property name.

✅ Syntax:
object.property
✅ Example:
let student = {
  name: "Amit",
  age: 20
};

console.log(student.name); // Amit
console.log(student.age);  // 20
✅ Key Points:
Property name must be known beforehand
Must be a valid identifier (no spaces, no special characters)
Clean and easy to read
🔹 Bracket Notation
✅ What it is:

Bracket notation is used to access properties using square brackets [] and a string (or variable).

✅ Syntax:
object["property"]
✅ Example:
let student = {
  name: "Amit",
  age: 20
};

console.log(student["name"]); // Amit
console.log(student["age"]);  // 20
🔹 Special Cases for Bracket Notation
1. Dynamic property (using variable)
let key = "name";
console.log(student[key]); // Amit

👉 Dot notation cannot do this:

console.log(student.key); // ❌ undefined
2. Property with spaces
let user = {
  "full name": "Amit Sharma"
};

console.log(user["full name"]); // Amit Sharma
3. Special characters
let data = {
  "user-id": 101
};

console.log(data["user-id"]); // 101

**Object methods in JavaScript**

Object methods in JavaScript are simply functions stored as properties inside an object. They allow objects to perform actions.

🔹 What is an Object Method?

A method is a function inside an object.

let person = {
  name: "Rahul",
  greet: function() {
    console.log("Hello!");
  }
};

person.greet(); // Hello!

👉 Here, greet is a method.

🔹 Example with Data + Method
let user = {
  name: "Amit",
  age: 25,
  sayHello: function() {
    console.log("Hi, I am " + this.name);
  }
};

user.sayHello(); // Hi, I am Amit
🔹 Using this in Methods
this refers to the current object
let car = {
  brand: "Toyota",
  start: function() {
    console.log(this.brand + " car started");
  }
};

car.start(); // Toyota car started
🔹 Shorter Syntax (ES6 Method Syntax)

You can write methods in a shorter way:

let person = {
  name: "Neha",
  greet() {
    console.log("Hello " + this.name);
  }
};

person.greet();
🔹 Object with Multiple Methods
let calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(5, 3)); // 2
🔹 Important Notes
Methods are just functions inside objects
Use this to access object properties
Methods can:
Return values
Modify object data
Call other methods
🔹 Real-World Example
let bankAccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    this.balance -= amount;
  }
};

bankAccount.deposit(500);
console.log(bankAccount.balance); // 1500

**Iteration: The for Loop**

Iteration means repeating a block of code multiple times, and the for loop is one of the most commonly used ways to do that in JavaScript.

🔹 What is a for Loop?

A for loop runs code a specific number of times.

✅ Syntax:
for (initialization; condition; increment/decrement) {
  // code to run
}
🔹 How It Works
for (let i = 0; i < 5; i++) {
  console.log(i);
}
👉 Step-by-step:
let i = 0 → start from 0
i < 5 → run while condition is true
i++ → increase i after each loop
✅ Output:
0
1
2
3
4


**Looping Arrays Breaking and Continuing**

The for loop is the most powerful and flexible way to iterate over arrays.

Basic Syntax
for (initialization; condition; increment) {
  // code to run
}
✅ Example: Looping an Array
const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
How it works:
i = 0 → start from first element
i < fruits.length → loop runs until last index
i++ → move to next index

👉 Output:

apple
banana
mango

⛔ Using break in a for Loop

break immediately stops the loop when a condition is met.

Example:
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    break;
  }
  console.log(numbers[i]);
}

👉 Output:

1
2
Explanation:
Loop stops completely when it reaches 3
Elements after 3 are never processed

⏭️ Using continue in a for Loop
continue skips the current iteration and moves to the next one.

Example:
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    continue;
  }
  console.log(numbers[i]);
}

👉 Output:

1
2
4
5
Explanation:
When 3 is found → skipped
Loop continues with next values

🔍 Real-Life Example
Stop searching when item is found (break)
const users = ["Ram", "Shyam", "Amit", "John"];

for (let i = 0; i < users.length; i++) {
  if (users[i] === "Amit") {
    console.log("User found!");
    break;
  }
}

Skip unwanted values (continue)
const marks = [45, 80, 30, 90];

for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 50) {
    continue;
  }
  console.log("Passed:", marks[i]);
}

**Looping Backwards and Loops in Loops**
Sometimes you want to go through an array from end to start.
✅ Syntax
for (let i = array.length - 1; i >= 0; i--) {
  // code
}

📌 Example: Reverse Loop
const fruits = ["apple", "banana", "mango"];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

👉 Output:
mango
banana
apple

🧠 How it works:
i = fruits.length - 1 → starts from last index
i >= 0 → stops at first element
i-- → moves backward

🎯 When to Use Backward Looping
Reversing data
Removing elements safely from arrays
Processing from latest to oldest items

🔄 Loops Inside Loops (Nested Loops)
A loop inside another loop is called a nested loop.
👉 Used when working with:

2D arrays (matrix)
Patterns
Comparing elements
✅ Basic Syntax
for (let i = 0; i < outerLimit; i++) {
  for (let j = 0; j < innerLimit; j++) {
    // code
  }
}
📌 Example 1: Simple Nested Loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}

👉 Output:

1 1
1 2
2 1
2 2
3 1
3 2
🧠 How it works:
Outer loop runs first (i)
Inner loop runs completely for each outer iteration

**The while Loop**
A while loop repeats a block of code as long as a condition is true.

👉 It checks the condition before running the code each time.

✅ Syntax
while (condition) {
  // code to run
}

📌 Basic Example
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

👉 Output:
1
2
3
4
5

🧠 How it works
Check condition (i <= 5)
If true → run the code
Increase i
Repeat until condition becomes false

⚠️ Important: Infinite Loop
If the condition never becomes false, the loop runs forever.

let i = 1;

while (i <= 5) {
  console.log(i);
  // missing i++
}

❌ This will run infinitely because i never changes.