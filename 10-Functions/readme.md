**First Class Functions and Higher Order Functions**
first class functions and higher order functions in javascript

🔹 First-Class Functions
👉 Definition:
In JavaScript, functions are treated like values.

That means you can:
Assign them to variables
Pass them as arguments
Return them from other functions

✅ Examples

1. Assign to variable
   const greet = function () {
   console.log("Hello");
   };

2. Pass as argument
   function sayHello() {
   console.log("Hello");
   }

function callFunction(fn) {
fn();
}

callFunction(sayHello);

3. Return from another function
   function outer() {
   return function () {
   console.log("Inner function");
   };
   }

const result = outer();
result();
🧠 Key Idea:
👉 Functions behave like any other variable (number, string, object)

🔹 Higher-Order Functions (HOF)
👉 Definition:

A higher-order function is a function that:

Takes another function as an argument, OR
Returns another function

✅ Examples

1. Function as argument
   function greet(name) {
   return "Hello " + name;
   }

function processUserInput(callback) {
console.log(callback("Navnath"));
}

processUserInput(greet); 2. Function returning function
function multiplier(factor) {
return function (num) {
return num \* factor;
};
}

const double = multiplier(2);
console.log(double(5)); // 10
🔥 Real-World Examples (VERY IMPORTANT)
✔️ Array methods are HOFs
[1, 2, 3].map(num => num \* 2);
[1, 2, 3].filter(num => num > 1);
[1, 2, 3].forEach(num => console.log(num));
✔️ Event handling (frontend)
button.addEventListener("click", function () {
console.log("Clicked");
});

| Concept               | Meaning                            |
| --------------------- | ---------------------------------- |
| First-Class Function  | Functions can be used like values  |
| Higher-Order Function | Functions that use other functions |

**call, apply and bind method in Javascript**

These three (call, apply, bind) are very important for controlling this in JavaScript.

🔹 Why do we need them?

In JavaScript, the value of this depends on how a function is called.

👉 call, apply, and bind let you manually set this

🔹 1. call()
👉 Calls the function immediately and sets this
const person = {
name: "Navnath",
};

function greet(city) {
console.log(`Hello, I am ${this.name} from ${city}`);
}

greet.call(person, "Pune");
✅ Output:
Hello, I am Navnath from Pune

🔹 2. apply()
👉 Same as call, but arguments are passed as an array
greet.apply(person, ["Mumbai"]);
✅ Output:
Hello, I am Navnath from Mumbai

🔹 3. bind()
👉 Does NOT call the function immediately

👉 Returns a new function with this fixed

const boundGreet = greet.bind(person, "Nagpur");

boundGreet();
✅ Output:
Hello, I am Navnath from Nagpur

🔥 Key Differences

| Feature   | call()          | apply()         | bind()          |
| --------- | --------------- | --------------- | --------------- |
| Execution | Immediate       | Immediate       | Not immediate   |
| Arguments | Comma separated | Array           | Comma separated |
| Return    | Function result | Function result | New function    |

🔥 Real-world Example
Borrowing method
const person1 = {
name: "A",
};

const person2 = {
name: "B",
};

function sayHi() {
console.log("Hi " + this.name);
}

sayHi.call(person1); // Hi A
sayHi.call(person2); // Hi B

🔥 Interview Trick Question
const obj = {
name: "JS",
show: function () {
console.log(this.name);
},
};

const fn = obj.show;
fn(); // ❌ undefined (or window/global)

👉 Fix using bind:

const fn = obj.show.bind(obj);
fn(); // JS

🧠 Easy Way to Remember
call → Call now
apply → Apply array
bind → Bind and use later

**Immediately Invoked Function Expression (IIFE) in Javascript**
👉 Definition:
An IIFE is a function that is defined and executed immediately after its creation.

🔹 Basic Syntax
(function () {
console.log("I run immediately!");
})();

✔️ How it works:
() → converts function into an expression
Final () → invokes (calls) it immediately

🔹 Arrow Function IIFE
(() => {
console.log("Arrow IIFE");
})();

🔹 IIFE with Parameters
(function (name) {
console.log("Hello " + name);
})("Navnath");

🔹 Why use IIFE?
✅ 1. Avoid Global Scope Pollution
(function () {
let message = "Private";
console.log(message);
})();

// console.log(message); ❌ Error (not accessible)

✅ 2. Create Private Variables (Encapsulation)
const counter = (function () {
let count = 0;

return function () {
count++;
console.log(count);
};
})();

counter(); // 1
counter(); // 2

✅ 3. Run Code Only Once
(function () {
console.log("Initialization code runs once");
})();

🔥 Important
❓ Why parentheses?

Without them:

function () {} // ❌ Syntax error

With IIFE:

(function () {})(); // ✅ valid

👉 Because JS treats it as an expression, not a declaration.

🔹 Named IIFE (optional)
(function greet() {
console.log("Hello");
})();

🔹 Real-world Example
const result = (function () {
let secret = 42;
return secret \* 2;
})();

console.log(result); // 84

🔸 When NOT needed (modern JS)
👉 With:

let / const
Modules (import/export)

IIFE is used less now, but still important for interviews & legacy code

🧠 Easy Way to Remember
Define + Execute immediately

🚀 One-Liner

“An IIFE is a function that runs immediately after being defined, mainly used to create a private scope and avoid polluting the global scope.”

**Closure in Javascript**

🔹 What is a Closure?
👉 Definition:

A closure is when a function remembers variables from its outer (lexical) scope even after the outer function has finished executing.

🔍 Basic Example
function outer() {
let count = 0;

return function inner() {
count++;
console.log(count);
};
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

🧠 What’s happening?
outer() runs → creates count
It returns inner()
Normally, outer() should be gone ❌
BUT inner() still remembers count ✅

👉 This memory is called a closure

🔥 Key Concept
A closure = function + its lexical environment

🔹 Why Closures are Useful
✅ 1. Data Privacy (Encapsulation)
function createBankAccount() {
let balance = 0;

return {
deposit(amount) {
balance += amount;
console.log(balance);
},
withdraw(amount) {
balance -= amount;
console.log(balance);
}
};
}

const account = createBankAccount();

account.deposit(100); // 100
account.withdraw(50); // 50
👉 balance is private (cannot access directly)

✅ 2. Function Factories
function multiplier(factor) {
return function (num) {
return num \* factor;
};
}

const double = multiplier(2);
console.log(double(5)); // 10

✅ 3. Maintain State
function counter() {
let count = 0;
return () => ++count;
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2

🔥 Common Interview Question
❓ What will this print?
for (var i = 1; i <= 3; i++) {
setTimeout(function () {
console.log(i);
}, 1000);
}
❌ Output:
4 4 4

👉 Because var is function-scoped → closure captures same i

✅ Fix using let
for (let i = 1; i <= 3; i++) {
setTimeout(function () {
console.log(i);
}, 1000);
}
✅ Output:
1 2 3

✅ Fix using closure
for (var i = 1; i <= 3; i++) {
(function (j) {
setTimeout(function () {
console.log(j);
}, 1000);
})(i);
}

🔸 Closures vs IIFE (Important)
IIFE → runs immediately
Closure → remembers variables
👉 Often used together

🧠 Easy Way to Remember
Closure = “Function with memory”

🚀 One-Liner

“A closure is created when a function retains access to variables from its outer scope even after the outer function has executed.”

⚠️ Important Notes
Closures can increase memory usage if overused
Very useful in:
React hooks
Event handlers
Callbacks
