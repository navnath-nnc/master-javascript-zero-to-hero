**Destructuring Arrays**
Array destructuring in JavaScript is a way to extract values from an array and assign them to variables in a single line.

🔹 Basic Idea
Instead of doing this:
const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];
const c = arr[2];

👉 You can do:
const arr = [10, 20, 30];
const [a, b, c] = arr;
✔ Cleaner
✔ Shorter
✔ More readable

🔹 1. Simple Example
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first); // red
console.log(second); // green

🔹 2. Skip Values
const numbers = [1, 2, 3, 4];
const [a, , c] = numbers;
console.log(a); // 1
console.log(c); // 3
👉 Notice the empty space (, ,) skips values.

🔹 3. Default Values
const arr = [10];
const [a, b = 20] = arr;
console.log(a); // 10
console.log(b); // 20 (default)

🔹 4. Swap Variables
let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x); // 2
console.log(y); // 1

🔹 5. Rest Operator (...)
const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;

console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

🔹 6. Nested Array Destructuring
const arr = [1, [2, 3]];

const [a, [b, c]] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

🔹 7. Function Return Example
function getUser() {
return ["Rahul", 25];
}

const [name, age] = getUser();

console.log(name); // Rahul

🔹 8. Real Use Case (React)

Very common in React:

const [count, setCount] = useState(0);

👉 Here:
count = current state
setCount = function to update it

🔥 Summary
Use [] on the left side
Order matters
You can skip, set defaults, and use rest
Makes code clean and concise

**Destructuring Objects in Javascript**

Object destructuring in JavaScript lets you extract properties from an object and assign them to variables in a clean way.

🔹 Basic Syntax
const { key1, key2 } = object;

👉 Variable names must match the property names.

🔹 1. Simple Example
const user = {
name: "Rahul",
age: 25
};

const { name, age } = user;

console.log(name); // Rahul
console.log(age); // 25

🔹 2. Rename Variables
const user = {
name: "Rahul",
age: 25
};

const { name: userName, age: userAge } = user;

console.log(userName); // Rahul
console.log(userAge); // 25

👉 name: userName → rename variable

🔹 3. Default Values
const user = {
name: "Rahul"
};

const { name, age = 18 } = user;

console.log(age); // 18 (default)

🔹 4. Nested Object Destructuring
const user = {
name: "Rahul",
address: {
city: "Mumbai",
pincode: 400001
}
};

const { address: { city, pincode } } = user;

console.log(city); // Mumbai
console.log(pincode); // 400001

🔹 5. Extract + Rename Nested
const user = {
address: {
city: "Delhi"
}
};

const { address: { city: userCity } } = user;

console.log(userCity); // Delhi

🔹 6. Rest Operator (...)
const user = {
name: "Rahul",
age: 25,
country: "India"
};

const { name, ...rest } = user;

console.log(name); // Rahul
console.log(rest); // { age: 25, country: "India" }

🔹 7. In Function Parameters
function greet({ name, age }) {
console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Amit", age: 22 });

🔹 8. Real Use Case (React Props)

In React:

function User({ name, age }) {
return <h1>{name} - {age}</h1>;
}

👉 Directly destructuring props makes code cleaner.

🔥 Key Points
Uses {} instead of []
Property names must match (or rename them)
Supports:
default values
nested objects
rest operator
Very common in React & modern JavaScript

..........................................
**Spread and Rest Operator**
Spread (...) and Rest (...) look the same in JavaScript, but they do opposite jobs depending on where you use them.

🔹 1. Spread Operator (...)
👉 Expands (unpacks) elements
Used when you want to take values out of an array/object

✅ Examples
📌 Array Spread
const arr1 = [1, 2, 3];const arr2 = [...arr1, 4, 5];console.log(arr2); // [1, 2, 3, 4, 5]

📌 Copy Array (Important ⚠️)
const original = [1, 2, 3];const copy = [...original];copy.push(4);console.log(original); // [1, 2, 3]console.log(copy); // [1, 2, 3, 4]
👉 Avoids reference issues (unlike direct assignment)

📌 Merge Arrays
const a = [1, 2];const b = [3, 4];const merged = [...a, ...b];

📌 Object Spread
const user = { name: "Navnath", age: 28 };const updated = { ...user, city: "Nagpur" };

📌 Function Arguments
const nums = [1, 2, 3];function sum(a, b, c) { return a + b + c;}sum(...nums); // 6

🔹 2. Rest Operator (...)
👉 Collects (packs) elements into one
Used when you want to gather multiple values into a single variable

✅ Examples
📌 Function Parameters
function sum(...numbers) { return numbers.reduce((acc, curr) => acc + curr, 0);}sum(1, 2, 3, 4); // 10
👉 numbers becomes an array

📌 Array Destructuring
const arr = [1, 2, 3, 4];const [first, ...rest] = arr;console.log(first); // 1console.log(rest); // [2, 3, 4]

📌 Object Destructuring
const user = { name: "Navnath", age: 28, city: "Nagpur"};const { name, ...others } = user;console.log(name); // Navnath
console.log(others); // { age: 28, city: "Nagpur" }

key difference:

| Feature    | Spread (`...`)   | Rest (`...`)    |
| ---------- | ---------------- | --------------- |
| Purpose    | Expand values    | Collect values  |
| Usage side | Right side (RHS) | Left side (LHS) |
| Example    | `[...arr]`       | `[a, ...rest]`  |

🧠 Easy Way to Remember

Spread → “Break it” (expand)

Rest → “Collect it” (gather)

⚠️ Common Mistake
const obj = { a: 1, b: 2 };const newObj = { ...obj, a: 10 };
👉 Output: { a: 10, b: 2 }
✔️ Last value overrides previous ones

**Short Circuiting Using OR and AND Operator in Javascript**
Short-circuiting in JavaScript means the evaluation stops early as soon as the result is determined.

It happens with || (OR) and && (AND).
🔹 1. OR Operator (||)

👉 Returns the first truthy value

✅ Example
console.log(0 || "Hello"); // "Hello"
console.log("" || "JS"); // "JS"
console.log(null || 10); // 10
console.log("Hi" || "JS"); // "Hi"

👉 It stops when it finds the first truthy value.

🧠 Use Case (Default Values)
const name = "" || "Guest";
console.log(name); // "Guest"

🔹 2. AND Operator (&&)

👉 Returns the first falsy value, or last value if all are truthy

✅ Example
console.log(0 && "Hello"); // 0
console.log("Hi" && "JS"); // "JS"
console.log(true && 5); // 5
console.log(null && 10); // null

👉 It stops when it finds the first falsy value.

🧠 Use Case (Conditional Execution)
const isLoggedIn = true;

isLoggedIn && console.log("Welcome!");
👉 Runs only if condition is true

⚠️ Important Truthy/Falsy Values
❌ Falsy:
false, 0, "", null, undefined, NaN
✅ Everything else → Truthy

💡 Real Interview Insight
const value = 0 || 100; // 100 (problem!)

👉 If 0 is valid, this is wrong
👉 Use nullish coalescing (??) instead:
const value = 0 ?? 100; // 0 ✅

🧠 Simple Memory Trick
|| → "Give me first TRUE"
&& → "Give me first FALSE"

**The for...of loop**

The for...of loop in JavaScript is used to iterate over iterable values like arrays, strings, maps, sets, etc.

👉 It gives you values directly (not indexes).

🔹 Basic Syntax
for (const item of iterable) {
// use item
}
✅ Examples
📌 1. Array
const arr = [10, 20, 30];

for (const value of arr) {
console.log(value);
}

👉 Output:

10
20
30
📌 2. String
const str = "JS";

for (const char of str) {
console.log(char);
}

👉 Output:

J
S
📌 3. Set
const set = new Set([1, 2, 3]);

for (const val of set) {
console.log(val);
}
📌 4. Map
const map = new Map([
["name", "Navnath"],
["age", 28]
]);

for (const [key, value] of map) {
console.log(key, value);
}

⚠️ Important Example
const arr = ["a", "b", "c"];

for (const i in arr) {
console.log(i); // 0, 1, 2
}

for (const val of arr) {
console.log(val); // a, b, c
}
🚫 Not for Plain Objects
const obj = { a: 1, b: 2 };

for (const val of obj) { // ❌ Error
}

👉 Objects are not iterable

✔️ Use:

for (const key in obj) {
console.log(key, obj[key]);
}

OR:

for (const [key, value] of Object.entries(obj)) {
console.log(key, value);
}
🧠 When to Use for...of
When you need values directly
Cleaner than traditional for loop
Best for arrays, strings, maps, sets

You can use break and continue:
for (const num of [1, 2, 3, 4]) {
if (num === 3) break;
console.log(num);
}
🧠 Easy Memory Trick
for...of → value
for...in → index/key

**Optional Chaining in Javascript**
Optional Chaining (?.) in JavaScript is used to safely access nested properties without causing errors if something is null or undefined.

🔹 Why We Need It
Without optional chaining:
const user = null;
console.log(user.name); // ❌ Error: Cannot read property 'name'
👉 This crashes your code.

✅ With Optional Chaining
const user = null;
console.log(user?.name); // undefined ✅ (no error)
👉 If user is null or undefined, it stops and returns undefined

🔹 Syntax
obj?.propertyobj?.[key]obj?.method()

✅ Examples
📌 1. Nested Objects
const user = { profile: { name: "Navnath" }};
console.log(user?.profile?.name); // Navnath
console.log(user?.address?.city); // undefined

📌 2. Function Calls
const user = { greet() { return "Hello"; }};
console.log(user.greet?.()); // Hello
console.log(user.sayHi?.()); // undefined (no error)

📌 3. Arrays
const arr = [1, 2, 3];
console.log(arr?.[0]); // 1
console.log(arr?.[5]); // undefined

🔥 Real Use Case (Very Common)
const response = { data: { user: { name: "Navnath" } }};
const name = response?.data?.user?.name;
👉 Avoids writing multiple checks like:
if (response && response.data && response.data.user) ...

⚠️ Important Points
❌ Doesn’t Work on Undeclared Variables
console.log(user?.name); // ❌ if user is not defined at all

⚠️ Stops Only on null / undefined
const obj = { value: 0 };
console.log(obj?.value); // 0
✅ (not skipped)

🔥 Combine with Nullish Coalescing (??)
const user = {};
const name = user?.name ?? "Guest";
console.log(name); // Guest

🧠 Easy Memory Trick

?. → "If exists, then access"

Otherwise → return undefined, don’t crash

**Sets in Javascript**
A Set in JavaScript is a built-in object that stores unique values only (no duplicates).

✅ 1. Creating a Set
const mySet = new Set();

With values:

const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // {1, 2, 3, 4}

👉 Duplicate 3 is automatically removed.

✅ 2. Common Methods
➤ Add value
mySet.add(5);
➤ Delete value
mySet.delete(2);
➤ Check value
mySet.has(3); // true
➤ Size
mySet.size; // number of elements
➤ Clear all
mySet.clear();

✅ 3. Loop through Set
for (let value of mySet) {
console.log(value);
}

Or:

mySet.forEach(val => console.log(val));

✅ 4. Convert Set ↔ Array
Set → Array
const arr = [...mySet];
Array → Set
const set = new Set([1, 2, 2, 3]);

✅ 5. Remove duplicates from array
const numbers = [1, 2, 2, 3, 4, 4];

const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4]

✅ 6. Important Points
Stores unique values only
Maintains insertion order
Can store any type (number, string, object, etc.)
Faster lookup than arrays in many cases

✅ 7. Set Vs Array
| Feature | Set | Array |
| ------------ | ------------- | --------- |
| Duplicates | ❌ Not allowed | ✅ Allowed |
| Index access | ❌ No | ✅ Yes |
| Performance | Faster search | Slower |

💡 Real-world use cases
Removing duplicates
Checking if value exists quickly
Tracking visited items (like in algorithms)

**Set and Map in Javascript**
In JavaScript, Set and Map are built-in data structures (introduced in ES6) that help you store and manage collections of data more efficiently than plain arrays or objects in certain cases.

🔹 Set in JavaScript
A Set is a collection of unique values.

Key features:
No duplicate values allowed
Values can be of any type (numbers, strings, objects, etc.)
Maintains insertion order
Example:
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate, ignored

console.log(mySet); // Set(2) {1, 2}
Common methods:
mySet.add(value); // Add value
mySet.delete(value); // Remove value
mySet.has(value); // Check if exists (true/false)
mySet.clear(); // Remove all values
mySet.size; // Get number of elements
Use case:
Removing duplicates from an array:
const numbers = [1, 2, 2, 3];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3]

🔹 Map in JavaScript
A Map is a collection of key-value pairs (like objects, but more flexible).

Key features:
Keys can be any type (not just strings)
Maintains insertion order
Better performance for frequent additions/removals compared to objects
Example:
const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'number key');

console.log(myMap.get('name')); // John
Common methods:
myMap.set(key, value); // Add/update
myMap.get(key); // Get value
myMap.has(key); // Check key
myMap.delete(key); // Remove key
myMap.clear(); // Remove all
myMap.size; // Number of entries

Set Vs Map

| Feature     | Set                                  | Map                   |
| ----------- | ------------------------------------ | --------------------- |
| Data stored | Only values                          | Key-value pairs       |
| Uniqueness  | Values must be unique                | Keys must be unique   |
| Access      | By value (no key)                    | By key                |
| Use case    | Remove duplicates, membership checks | Store structured data |

🔹 Quick analogy
Set → a bag of unique items
Map → a dictionary (key → value)

**String Methods in Javascript**
JavaScript provides many built-in string methods to manipulate and work with text.

🔹 Common String Methods in JavaScript

1. 🔸 Length
   let str = "Hello";
   console.log(str.length); // 5

2. 🔸 Changing Case
   str.toUpperCase(); // "HELLO"
   str.toLowerCase(); // "hello"

3. 🔸 Finding Characters / Substrings
   str.indexOf("l"); // 2 (first occurrence)
   str.lastIndexOf("l"); // 3 (last occurrence)
   str.includes("He"); // true
   str.startsWith("He"); // true
   str.endsWith("lo"); // true

4. 🔸 Extracting Parts of String
   let text = "JavaScript";

text.slice(0, 4); // "Java"
text.substring(0, 4); // "Java"

5. 🔸 Replace Content
   let str = "Hello World";

str.replace("World", "JS"); // "Hello JS"
str.replaceAll("l", "L"); // "HeLLo WorLd"

6. 🔸 Trim Spaces
   let str = " hello ";

str.trim(); // "hello"
str.trimStart(); // "hello "
str.trimEnd(); // " hello"

7. 🔸 Split & Join
   let str = "a,b,c";

str.split(","); // ["a", "b", "c"]

(Used a lot in real-world parsing)

8. 🔸 Repeat String
   "Hi ".repeat(3); // "Hi Hi Hi "

9. 🔸 Access Characters
   let str = "Hello";

str.charAt(1); // "e"
str[1]; // "e" (modern way)

10. 🔸 Concatenation
    "Hello".concat(" ", "World"); // "Hello World"

// Better modern way:
"Hello" + " World"
`Hello World` // template literals

11. 🔸 Pad String
    "5".padStart(3, "0"); // "005"
    "5".padEnd(3, "0"); // "500"

12. 🔸 Convert String to Array (characters)
    Array.from("abc"); // ["a", "b", "c"]

🔥 Important Interview Tips
✔️ Difference: slice() vs substring()
slice() supports negative indexes
substring() does NOT
"hello".slice(-2); // "lo"
"hello".substring(-2); // "hello"

✔️ Strings are immutable
let str = "hello";
str[0] = "H"; // ❌ won't change

You must create a new string.

🔹 Real-world examples
Remove spaces
let name = " Navnath ";
console.log(name.trim());
Reverse string
let str = "hello";
let reversed = str.split("").reverse().join("");
