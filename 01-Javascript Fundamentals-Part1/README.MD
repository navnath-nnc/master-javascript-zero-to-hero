- **Values**  
  A value in JavaScript is a piece of information, such as a number, string, or boolean.

- **Variables**  
  A variable is like a box where we can store a value for later use.
  A variable is like a box where we can store a value.  
  - Variables can be written in **camelCase** (e.g., `firstName`) or with underscores (e.g., `first_name`).  
  - Variables **cannot** start with a number (❌ `3name`, ✅ `name3`).  
  - Variables can contain letters, digits, `$`, and `_`, but must follow naming rules.
  - Variables **should not** start with a capital letter (❌ `Person`, ✅ `person`).  
  - Reserved **keywords** (like `new`, `class`, `return`) cannot be used as variable names.  
  - Variables written in **ALL CAPS** (e.g., `PI`, `MAX_VALUE`) are typically reserved for constants (`const`) to represent fixed values.


  - **Comments**
  In JavaScript, comments are used to explain code, make it more readable, or temporarily disable parts of it. There are two main types: single-line (//) and multi-line (/* ... */).

- Single-Line Comments (//)
- Start with // and continue until the end of the line.
- Useful for short notes or inline explanations.

- Multi-Line Comments (/* ... */)
- Begin with /* and end with */.
- Useful for longer explanations or temporarily disabling blocks of code.

 Key Points:
- Comments are ignored by the JavaScript engine (they don’t affect execution).
- They are often used for documentation, debugging, or collaboration.
- Best practice: keep comments clear and concise, avoid over-commenting obvious code.

-**Data Types**
JavaScript has 8 main data types: 7 primitive types and 1 non-primitive (object). 

Primitive Data Types
Primitive types are immutable and stored directly in memory.

- Number → Represents integers and floating-point numbers
- String → Text enclosed in quotes (', ", or backticks `).
- Boolean → Logical values: true or false.
- Undefined → A variable declared but not assigned a value
- Null → Represents intentional absence of value.
- Symbol → Unique and immutable identifiers, often used as object keys
- BigInt → Represents very large integers beyond Number limits.


Non-Primitive Data Type
- Object → A collection of key-value pairs.

Key Notes
- JavaScript is dynamically typed → variables can change type at runtime.
- It is also weakly typed → allows implicit type conversions.

**typeof operator**
The typeof keyword in JavaScript is an operator that returns a string describing the data type of a value or variable. It’s widely used to check types at runtime, especially in dynamic code.


**let, const, var**

let
Definition: let is used to declare variables with block scope (introduced in ES6).
Scope: Block-scoped ({ })
Re-declaration: Not allowed in the same scope
Re-assignment: Allowed

const
Definition: const is used to declare constants (values that should not be reassigned).
Scope: Block-scoped
Re-declaration: Not allowed
Re-assignment: Not allowed

var
Definition: var is the old way of declaring variables in JavaScript (before ES6).
Scope: Function-scoped (or globally scoped if declared outside a function).
Re-declaration: Allowed
Re-assignment: Allowed

**Basic operators**
Operators in JavaScript are special symbols or keywords used to perform operations on values (operands), such as calculations, comparisons, or logical decisions.

Arithmetic (Math) Operators
Definition: Arithmetic operators are used to perform mathematical calculations on values.
Symbols: +, -, *, /, %, ++, --

Assignment Operators
Definition: Assignment operators are used to assign or update values of variables.
Symbols: =, +=, -=, *=, /=, %=

Comparison Operators
Definition: Comparison operators are used to compare two values and return true or false.
Symbols: ==, ===, !=, !==, >, <, >=, <=

**Operator Precedence**
Operator Precedence in JavaScript
Definition: Operator precedence in JavaScript determines the order in which operators are evaluated in an expression. Operators with higher precedence are executed before those with lower precedence.

**Template Literals in JavaScript**

Definition: Template literals are a way to create strings using backticks ( ` ) instead of quotes, allowing you to easily include variables and expressions inside a string.

Key Features
1. String Interpolation
You can insert variables using ${}
let name = "John";
let message = `Hello, ${name}`;
console.log(message); // Hello, John

2. Multi-line Strings
You can write strings across multiple lines without using \n
let text = `This is
a multi-line
string`;

3. Expressions Inside Strings
You can perform calculations inside ${}
let result = `Sum is ${5 + 3}`;
console.log(result); // Sum is 8

**Decision Making in JavaScript- if-else statement**

Definition: Decision making in JavaScript is used to execute different blocks of code based on certain conditions.
🔹 if Statement

Definition: The if statement executes a block of code only if a specified condition is true.
Syntax:
if (condition) {
  // code to execute
}

Example:
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
}

-if-else Statement

Definition: The if-else statement executes one block of code if the condition is true and another block if it is false.
Syntax:
if (condition) {
  // code if true
} else {
  // code if false
}
Example:
let age = 16;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

**Type Conversion in JavaScript**

Definition: Type conversion is the process of manually changing a value from one data type to another using functions or methods.

👉 It is explicit (done by the programmer manually).

Examples:
let num = "10";

let convertedNum = Number(num); // string → number
console.log(convertedNum); // 10
let str = String(123); // number → string
console.log(str); // "123"

**Type Coercion in JavaScript**

Definition: Type coercion is the automatic conversion of one data type to another by JavaScript during operations.

👉 It is implicit (done by JavaScript engine).

Examples:
console.log("5" + 2); // "52" (number converted to string)
console.log("5" - 2); // 3 (string converted to number)

**Truthy and Falsy Values in JavaScript**

In JavaScript, values are treated as either truthy or falsy when used in conditions (like in if statements).

-Falsy Values
Definition: Falsy values are values that are considered false when converted to a boolean.

👉 There are only a few falsy values:
false
0
"" (empty string)
null
undefined
NaN

Example:
if (0) {
  console.log("This will NOT run");
} else {
  console.log("0 is falsy");
}

-Truthy Values
Definition: Truthy values are all values that are considered true when converted to a boolean.

👉 Almost everything else is truthy:
Non-zero numbers (1, -5, etc.)
Non-empty strings ("hello")
Arrays ([])
Objects ({})
true

Example:
if ("hello") {
  console.log("This will run");
}

-Example Comparison
console.log(Boolean(0));       // false
console.log(Boolean("Hi"));    // true
console.log(Boolean(null));    // false
console.log(Boolean(100));

**Equality Operators in JavaScript (== vs ===)**
🔹 == (Loose Equality)
Definition: The == operator compares two values after converting them to a common type (type coercion).

👉 It does not check data type strictly.

Examples:
console.log(5 == "5");   // true
console.log(true == 1);  // true
console.log(null == undefined); // true
🔹 === (Strict Equality)
Definition: The === operator compares both value and data type without converting types.

👉 It is strict and more reliable.

Examples:
console.log(5 === "5");  // false (different types)
console.log(5 === 5);    // true


**Boolean Logic in JavaScript**
Definition: Boolean logic in JavaScript is used to evaluate expressions that result in either true or false, mainly for decision-making in programs.

🔹 Boolean Values
There are only two boolean values:
true
false
🔹 Logical Operators
1. AND (&&)

Definition: Returns true if both conditions are true.

console.log(true && true);   // true
console.log(true && false);  // false
2. OR (||)
Definition: Returns true if at least one condition is true.

console.log(true || false);  // true
console.log(false || false); // false
3. NOT (!)
Definition: Reverses the boolean value.

console.log(!true);  // false
console.log(!false); // true
🔹 Example in Decision Making
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter");
}

**Switch Statement in JavaScript**

Definition: The switch statement is used to perform different actions based on different conditions (cases). It is an alternative to multiple if-else statements.
🔹 Syntax
switch (expression) {
  case value1:
    // code block
    break;

  case value2:
    // code block
    break;

  default:
    // default code
}
🔹 How It Works
The expression is evaluated once.
Its value is compared with each case.
When a match is found, the corresponding code runs.
break stops execution from continuing to the next case.
default runs if no case matches.
🔹 Example
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

👉 Output: Tuesday

🔹 Important Note (Fall-through)

If you don’t use break, execution continues to the next case.

let x = 1;

switch (x) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
}

👉 Output:
One
Two

**Statements and Expressions in JavaScript**
🔹 Expression
Definition: An expression is any piece of code that produces a value.

👉 It can be a number, string, variable, or operation.

Examples:
5 + 3        // returns 8
"x" + "y"    // returns "xy"
true && false // returns false
🔹 Statement
Definition: A statement is a complete instruction that performs an action.

👉 It does not necessarily return a value.

Examples:
let x = 10;        // variable declaration statement

if (x > 5) {       // if statement
  console.log(x);
}

**Conditional (Ternary) Operator in JavaScript**
Definition: The conditional (ternary) operator is a shorthand way of writing an if-else statement. It evaluates a condition and returns one of two values.

🔹 Syntax
condition ? value_if_true : value_if_false;

🔹 Example
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult

🔹 Equivalent if-else
let result;
if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}

🔹 Nested Ternary (Multiple Conditions)
let marks = 75;
let grade = (marks >= 90) ? "A" :
            (marks >= 60) ? "B" : "C";


**JavaScript Releases: ES5, ES6+, and ESNext**
JavaScript has evolved significantly since its creation:
ES5 (2009): The standard for many years
ES6/ES2015 (2015): A major update with many features we've used:
let/const
Arrow functions
Template literals
Classes
Destructuring
And many more!
ES2016-ES2022: Annual smaller releases with new features
Modern browsers automatically update, supporting the latest features. For older browsers, we can
use tools like Babel to convert modern code to ES5.
The language continues to evolve, with proposals for new features constantly being considered
through a 4-stage process before becoming part of the official standard