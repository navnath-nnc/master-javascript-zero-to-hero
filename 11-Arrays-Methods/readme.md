**Simple Array Methods(slice, splice, reverse, concat and join)**

1. slice() (Non-destructive)
   👉 Returns a new array without modifying the original
   const arr = [1, 2, 3, 4, 5];

const result = arr.slice(1, 4);

console.log(result); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] ✅ unchanged
✔️ Syntax:
arr.slice(start, end);
start → inclusive
end → exclusive

🔹 2. splice() (Destructive)
👉 Modifies the original array
const arr = [1, 2, 3, 4, 5];

const result = arr.splice(1, 2);

console.log(result); // [2, 3] (removed items)
console.log(arr); // [1, 4, 5] ❗ modified
✔️ Syntax:
arr.splice(start, deleteCount, newItems...)
🔥 Insert using splice
arr.splice(1, 0, 10);
// inserts 10 at index 1

🔹 3. reverse()
👉 Reverses the array in place
const arr = [1, 2, 3];

arr.reverse();

console.log(arr); // [3, 2, 1] ❗ modified
⚠️ Important:
Changes original array

🔹 4. join()
👉 Converts array → string
const arr = ["a", "b", "c"];

const result = arr.join("-");

console.log(result); // "a-b-c"
✔️ Default:
arr.join(); // "a,b,c"

🔹 5. concat()
👉 Combines arrays (or values) and returns a new array
const arr1 = [1, 2];
const arr2 = [3, 4];

const result = arr1.concat(arr2);

console.log(result); // [1, 2, 3, 4]
console.log(arr1); // [1, 2] ✅ unchanged

🔥 Add values also
const result = arr1.concat(5, 6);

console.log(result); // [1, 2, 5, 6]
🔥 Combine multiple arrays
const result = arr1.concat(arr2, [5, 6]);

🔥 Important Points
✅ Does NOT modify original array
✅ Returns a new array
✅ Can combine arrays + values

🔸 concat vs push
let arr1 = [1, 2];
let arr2 = [3, 4];

// push
arr1.push(...arr2);
console.log(arr1); // [1, 2, 3, 4] ❗ modified

// concat
let result = arr1.concat(arr2);
console.log(result); // new array

🔸 concat vs spread operator (modern way)
const result = [...arr1, ...arr2];

👉 Same result as concat, but cleaner

🔥Quick Summary
| Method | Modifies Original? | Output |
| --------- | ------------------ | ------------- |
| slice() | ❌ No | New array |
| splice() | ✅ Yes | Removed items |
| reverse() | ✅ Yes | Same array |
| join() | ❌ No | String |
| concat() | ❌ No | New array |

🔥 Important Tips
✔️ Reverse without modifying original
const arr = [1, 2, 3];

const reversed = [...arr].reverse();

✔️ Convert string ↔ array
"hello".split("").reverse().join(""); // "olleh"

🧠 Easy Way to Remember
concat → combine arrays safely
slice → copy part
splice → cut/change
reverse → flip
join → make string

**🔹 at() Method in JavaScript Arrays**

👉 Definition:
The at() method is used to access elements of an array using an index, including negative indexing (from the end).

🔹 Basic Syntax
arr.at(index)
🔍 Examples
✅ Positive index (same as normal access)
const arr = [10, 20, 30, 40];

console.log(arr.at(1)); // 20
✅ Negative index (🔥 main advantage)
const arr = [10, 20, 30, 40];

console.log(arr.at(-1)); // 40 (last element)
console.log(arr.at(-2)); // 30

🔥 Why at() is useful
❌ Old way (not clean)
arr[arr.length - 1];
✅ New way
arr.at(-1);

👉 Cleaner and more readable

🔹 Works with Strings too
const str = "hello";

console.log(str.at(-1)); // "o"
🔸 Edge Cases
const arr = [1, 2, 3];

console.log(arr.at(10)); // undefined
console.log(arr.at(-10)); // undefined

🔥 Comparison
| Method | Negative Index Support |
| ---------- | ---------------------- |
| arr[index] | ❌ No |
| arr.at() | ✅ Yes |

🧠 Easy Way to Remember

at() = access element (from start or end)

🚀 Impotant
If asked:
👉 “How to get last element of array?”

Best answer:
arr.at(-1);

🔥 Real-world Usage
const users = ["A", "B", "C"];

const lastUser = users.at(-1);
console.log(lastUser); // C

**map, filter and reduce method in Javascript**

🔹 1. map()
👉 Purpose:

Transform each element → return a new array

const arr = [1, 2, 3];

const result = arr.map(num => num \* 2);

console.log(result); // [2, 4, 6]
✔️ Key points:
Same length as original array
Does NOT modify original array

🔹 2. filter()
👉 Purpose:

Return elements that match a condition

const arr = [1, 2, 3, 4];

const result = arr.filter(num => num > 2);

console.log(result); // [3, 4]
✔️ Key points:
Returns subset (can be smaller)
Condition must return true or false

🔹 3. reduce()
👉 Purpose:

Reduce array → single value

const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10
✔️ Syntax:
arr.reduce((accumulator, currentValue) => {}, initialValue);

🔥 Real-world Examples
✅ 1. Double numbers
arr.map(n => n \* 2);
✅ 2. Get even numbers
arr.filter(n => n % 2 === 0);
✅ 3. Sum of array
arr.reduce((sum, n) => sum + n, 0);
✅ 4. Count frequency (🔥 interview favorite)
const arr = [1, 2, 2, 3];

const freq = arr.reduce((acc, num) => {
acc[num] = (acc[num] || 0) + 1;
return acc;
}, {});

console.log(freq); // {1:1, 2:2, 3:1}

🔹Difference

| Method | Output       | Use case       |
| ------ | ------------ | -------------- |
| map    | New array    | Transform data |
| filter | New array    | Select data    |
| reduce | Single value | Aggregate data |

🔥 Chain Example (Very Important)
const arr = [1, 2, 3, 4, 5];

const result = arr
.filter(n => n > 2)
.map(n => n \* 2)
.reduce((sum, n) => sum + n, 0);

console.log(result); // 24

🧠 Easy Way to Remember
map → modify each item
filter → pick some items
reduce → combine all into one

**find() Method in JavaScript**
👉 Definition: find() is used to return the first element in an array that satisfies a condition.

🔹 Syntax
array.find((element) => condition)
🔍 Basic Example
const arr = [10, 20, 30, 40];

const result = arr.find(num => num > 20);

console.log(result);
✅ Output 30
👉 Returns the first matching element

🔹 If No Match Found
const arr = [1, 2, 3];

const result = arr.find(num => num > 10);

console.log(result);
✅ Output
undefined

🔥 Real-world Example
Find user by ID
const users = [
{ id: 1, name: "A" },
{ id: 2, name: "B" },
];

const user = users.find(u => u.id === 2);

console.log(user);
✅ Output
{ id: 2, name: "B" }

🔸 Difference: find() vs filter()
| Feature | find() | filter() |
| ----------------- | ---------------------- | --------------------- |
| Returns | First matching element | All matching elements |
| Output type | Single value/object | Array |
| Stops after match | ✅ Yes | ❌ No |

🔍 Example Comparison
✅ find()
const arr = [1, 2, 3, 4];

arr.find(num => num > 2);

Output:
3

✅ filter()
arr.filter(num => num > 2);

Output:
[3, 4]

🔥 Important Point
find() returns element, not index
const arr = [5, 10, 15];

console.log(arr.find(num => num > 5));

Output:
10

🔹 To get index → use findIndex()
arr.findIndex(num => num > 5);

Output:
1

🔥 Real-world Usage
Very common in:
Searching user data
Finding objects from API responses
Cart/product lookup
Form validation

🧠 Easy Way to Remember
find() → “Give me the first matching item”

🚀 One-Liner
“find() returns the first element in an array that satisfies a condition, otherwise it returns undefined.”

**Method Chaining in JavaScript**
👉 Definition:
Method chaining means:
Calling multiple methods one after another in a single statement.
The output of one method becomes the input for the next method.

🔍 Basic Example
const result = [1, 2, 3, 4]
.map(num => num \* 2)
.filter(num => num > 4);

console.log(result);
✅ Output
[6, 8]
🔥 How it works
Step 1 → map()
[2, 4, 6, 8]
Step 2 → filter()
[6, 8]

🔹 Commonly Chained Methods
map()
filter()
reduce()
sort()
slice()
join()
reverse()

🔥 Real-world Example
const users = [
{ name: "A", age: 20 },
{ name: "B", age: 30 },
{ name: "C", age: 25 },
];

const result = users
.filter(user => user.age > 21)
.map(user => user.name);

console.log(result);
✅ Output
["B", "C"]
🔹 String Method Chaining
const str = " javascript ";

const result = str
.trim()
.toUpperCase()
.slice(0, 4);

console.log(result);
✅ Output
JAVA

🔥 Why Chaining is Useful
✅ Cleaner code
const result = arr
.filter(...)
.map(...)
.reduce(...);
instead of many temporary variables.

✅ Readable
Each operation is clear.

🔸 Important Requirement
Chaining works when methods:
return a value/object/array

❌ Example That Breaks Chaining
arr.forEach(num => console.log(num)).map(...);
❌ Error

Because:
forEach()

returns:
undefined

🧠 Easy Way to Remember
“One method’s output becomes next method’s input”

🚀 One-Liner

“Method chaining is a technique where multiple methods are called sequentially because each method returns an object/value usable by the next method.”

**findIndex() Method in JavaScript**
👉 Definition: findIndex() returns the index of the first element in an array that satisfies a condition.

🔹 Syntax
array.findIndex((element) => condition)
🔍 Basic Example
const arr = [10, 20, 30, 40];
const index = arr.findIndex(num => num > 20);
console.log(index);
✅ Output: 2
Because: 30
is the first element greater than 20, and its index is 2.

🔥 If No Match Found
const arr = [1, 2, 3];
const index = arr.findIndex(num => num > 10);
console.log(index);
✅ Output: -1

🔹 Real-world Example
Find user index by ID
const users = [
{ id: 1, name: "A" },
{ id: 2, name: "B" },
];
const index = users.findIndex(user => user.id === 2);
console.log(index);
✅ Output: 1

🔸 Difference: find() vs findIndex()
| Method | Returns |
| ------------- | ------------- |
| `find()` | Element/value |
| `findIndex()` | Index |

🔍 Example Comparison
✅ find()
const arr = [5, 10, 15];
console.log(arr.find(num => num > 5));
Output: 10

✅ findIndex()
console.log(arr.findIndex(num => num > 5));
Output: 1

🔥 Useful Pattern
Update array item using index
const users = [
{ id: 1, name: "A" },
{ id: 2, name: "B" },
];

const index = users.findIndex(user => user.id === 2);
users[index].name = "Updated";
console.log(users);

🔹 Important Notes
Stops searching after first match
Returns -1 if not found
Does NOT modify original array

🧠 Easy Way to Remember
find() → gives item
findIndex() → gives position

🚀 One-Liner: “findIndex() returns the index of the first element that matches a condition, otherwise it returns -1.”

**some() and every() Methods in JavaScript**

Both methods are used to test conditions on array elements.

🔸 some()
👉 Definition: Checks if at least one element satisfies a condition.

🔹 Syntax
array.some((element) => condition)
🔍 Example
const arr = [1, 2, 3, 4];
const result = arr.some(num => num > 3);
console.log(result);
✅ Output: true
Because:
4 > 3
is true for at least one element.

🔥 If No Match
const arr = [1, 2, 3];
console.log(arr.some(num => num > 10));
✅ Output: false

🔸 every()
👉 Definition:
Checks if all elements satisfy a condition.
🔹 Syntax
array.every((element) => condition)

🔍 Example
const arr = [2, 4, 6];
const result = arr.every(num => num % 2 === 0);
console.log(result);
✅ Output
true
Because all elements are even.

🔥 If One Fails
const arr = [2, 4, 5];
console.log(arr.every(num => num % 2 === 0));
✅ Output: false

🔥 Main Difference
| Method | Meaning |
| --------- | ------------------------ |
| `some()` | At least one should pass |
| `every()` | All should pass |

🔍 Visual Understanding
some()
1 true is enough ✅
every()
All must be true ✅

🔥 Real-world Examples
✅ some()
Check if cart has expensive item
const prices = [100, 200, 5000];
const hasExpensive = prices.some(price => price > 1000);
console.log(hasExpensive);

✅ every()
Check if all users are verified
const users = [
{ verified: true },
{ verified: true },
];
const allVerified = users.every(user => user.verified);
console.log(allVerified);

🔹 Important Notes
Both return:
true / false
Both stop early for performance:
some() stops after first true
every() stops after first false

🧠 Easy Way to Remember
some → someone passed
every → everyone passed

🚀 One-Liner

“some() checks if at least one array element satisfies a condition, while every() checks if all elements satisfy it.”

**flat() and flatMap() in JavaScript**
These methods are used to work with nested arrays.

🔸 1. flat()
👉 Definition: flat() converts a nested array into a single-level array.

🔹 Syntax
array.flat(depth)
depth → how deeply to flatten
Default depth = 1
🔍 Example 1
const arr = [1, 2, [3, 4]];
const result = arr.flat();
console.log(result);
✅ Output
[1, 2, 3, 4]

🔍 Example 2 (Nested deeper)
const arr = [1, [2, [3, [4]]]];

console.log(arr.flat(2));
✅ Output
[1, 2, 3, [4]]

🔥 Flatten completely
arr.flat(Infinity);

🔸 2. flatMap()
👉 Definition: flatMap() = map() + flat(1)

It:
Maps each element
Flattens result by one level
🔹 Syntax
array.flatMap(callback)
🔍 Example
const arr = [1, 2, 3];
const result = arr.flatMap(num => [num, num * 2]);
console.log(result);
✅ Output
[1, 2, 2, 4, 3, 6]
🔥 Equivalent to
arr.map(num => [num, num * 2]).flat();

🔸 Difference Between flat() and flatMap()
| Method | Purpose |
| ----------- | ---------------------- |
| `flat()` | Flatten nested arrays |
| `flatMap()` | Map + flatten together |

🔍 Example Comparison
✅ map()
[1, 2, 3].map(num => [num * 2]);
Output:
[[2], [4], [6]]

✅ flatMap()
[1, 2, 3].flatMap(num => [num * 2]);
Output: [2, 4, 6]

🔥 Real-world Example
Split words into characters
const words = ["hi", "ok"];
const result = words.flatMap(word => word.split(""));
console.log(result);
✅ Output
["h", "i", "o", "k"]

🔹 Important Notes
flatMap()
Only flattens one level
More efficient than map().flat()

🧠 Easy Way to Remember
flat → flatten arrays
flatMap → map then flatten

🚀 One-Liner
“flat() removes array nesting, while flatMap() first transforms elements using map() and then flattens the result by one level.”

**Sorting Arrays in JavaScript**

JavaScript provides the built-in:
sort() method to sort arrays.

🔸 Basic Syntax
array.sort(compareFunction)

🔍 1. Default Sorting
const arr = [3, 1, 10, 2];
arr.sort();
console.log(arr);
❌ Output
[1, 10, 2, 3]

🔥 Why wrong?
By default:
sort()
converts values to strings and sorts alphabetically.

🔸 2. Correct Numeric Ascending Sort
const arr = [3, 1, 10, 2];

arr.sort((a, b) => a - b);

console.log(arr);
✅ Output
[1, 2, 3, 10]

🔸 3. Descending Sort
const arr = [3, 1, 10, 2];

arr.sort((a, b) => b - a);

console.log(arr);
✅ Output
[10, 3, 2, 1]
🔥 How Compare Function Works
Ascending
(a, b) => a - b
negative → a before b
positive → b before a
Descending
(a, b) => b - a

🔸 4. Sorting Strings
const fruits = ["banana", "apple", "orange"];
fruits.sort();
console.log(fruits);
✅ Output
["apple", "banana", "orange"]

🔸 5. Case-insensitive String Sort
const names = ["Navnath", "apple", "Banana"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);

🔸 6. Sorting Array of Objects
Sort by age
const users = [
{ name: "A", age: 30 },
{ name: "B", age: 20 },
];

users.sort((a, b) => a.age - b.age);

console.log(users);

🔸 7. Reverse After Sorting
arr.sort((a, b) => a - b).reverse();

🔥 Important Note
sort() modifies original array ❗

🔹 Keep Original Safe
const sorted = [...arr].sort((a, b) => a - b);

🔥 Real-world Examples
Highest number
const max = [...arr].sort((a, b) => b - a)[0];
Alphabetical user names
users.sort((a, b) => a.name.localeCompare(b.name));

🧠 Easy Way to Remember
a - b → ascending
b - a → descending
🚀 One-Liner

“JavaScript’s sort() method sorts arrays in place. For numbers, a compare function like (a, b) => a - b is needed because default sorting is lexicographical.”

**Grouping Arrays in JavaScript**
Grouping means:
Organizing array elements into categories based on a condition or property.

Usually done using:
reduce() ✅ (most common)
Object.groupBy() ✅ (modern)
Map

🔸 1. Grouping Using reduce() ✅
🔍 Example: Group people by age
const users = [
{ name: "A", age: 20 },
{ name: "B", age: 25 },
{ name: "C", age: 20 },
];

const grouped = users.reduce((acc, user) => {
const key = user.age;

if (!acc[key]) {
acc[key] = [];
}

acc[key].push(user);

return acc;
}, {});
console.log(grouped);
✅ Output
{
20: [
{ name: "A", age: 20 },
{ name: "C", age: 20 }
],
25: [
{ name: "B", age: 25 }
]
}
🔥 How it works
Step-by-step
First user
acc[20] = [user]
Next user with same age
acc[20].push(user)

🔸 2. Group by Property
Group products by category
const products = [
{ name: "Laptop", category: "Electronics" },
{ name: "Shirt", category: "Clothing" },
{ name: "Phone", category: "Electronics" },
];
const grouped = products.reduce((acc, product) => {
const key = product.category;
acc[key] = acc[key] || [];
acc[key].push(product);
return acc;
}, {});

console.log(grouped);

🔸 3. Using Object.groupBy() ✅ (Modern JS)
const grouped = Object.groupBy(users, user => user.age);
console.log(grouped);
⚠️ Note
Object.groupBy() is newer and may not work in older browsers.

🔸 4. Grouping with Map
const grouped = new Map();

users.forEach(user => {
const key = user.age;

if (!grouped.has(key)) {
grouped.set(key, []);
}

grouped.get(key).push(user);
});

console.log(grouped);

🔥 Real-world Use Cases
✅ Group:
employees by department
products by category
students by grade
orders by status
🔸 Example: Even/Odd Grouping
const nums = [1, 2, 3, 4, 5];

const grouped = nums.reduce((acc, num) => {
const key = num % 2 === 0 ? "even" : "odd";

acc[key] = acc[key] || [];
acc[key].push(num);

return acc;
}, {});

console.log(grouped);
✅ Output
{
odd: [1, 3, 5],
even: [2, 4]
}

🔥Pattern
acc[key] = acc[key] || [];

Mening:
create array if not exists

🧠 Easy Way to Remember
Grouping = “Create buckets based on condition/property”

🚀 One-Liner

“Array grouping is commonly done using reduce() by accumulating elements into categorized keys.”

**Ways to Create and Fill Arrays in JavaScript**

There are many ways to create and fill arrays depending on the use case.

🔸 1. Array Literal (Most Common)
const arr = [1, 2, 3];

console.log(arr);

🔸 2. Using new Array()
const arr = new Array(1, 2, 3);
console.log(arr);

⚠️ Special Behavior
const arr = new Array(5);
console.log(arr);
Output
[empty × 5]

Creates empty slots, not actual values.

🔸 3. Using fill() ✅
Fill array with same value
const arr = new Array(5).fill(0);
console.log(arr);
✅ Output
[0, 0, 0, 0, 0]

🔥 Fill part of array
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr);
✅ Output
[1, 0, 0, 4]

🔸 4. Using Array.from() ✅
Create sequential numbers
const arr = Array.from({ length: 5 }, (\_, i) => i + 1);
console.log(arr);
✅ Output
[1, 2, 3, 4, 5]

🔥 Explanation
(_, i)
_ → unused current value
i → index

🔸 5. Using Loop
const arr = [];
for (let i = 1; i <= 5; i++) {
arr.push(i);
}

console.log(arr);

🔸 6. Using Spread Operator
const arr = [...Array(5).keys()];

console.log(arr);
✅ Output
[0, 1, 2, 3, 4]

🔸 7. Using map() ⚠️
const arr = Array(5).fill().map((\_, i) => i + 1);
console.log(arr);

⚠️ Why fill() needed?
Array(5).map(...)

won’t work because empty slots are skipped.

🔸 8. Create 2D Array
const matrix = Array.from({ length: 3 }, () =>
Array(3).fill(0)
);
console.log(matrix);
✅ Output
[
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
]

🔥 Important Methods
| Method | Purpose |
| -------------- | ------------------------- |
| `fill()` | Fill with same value |
| `Array.from()` | Generate dynamic values |
| `push()` | Add values manually |
| Spread `...` | Convert iterable to array |

🔥 Important
Create array [1,2,3,4,5]
Best modern solution:
Array.from({ length: 5 }, (\_, i) => i + 1);

🧠 Easy Way to Remember
fill() → same value
Array.from() → dynamic generation
push() → manual insertion

🚀 One-Liner

“Arrays in JavaScript can be created using literals, constructors, fill(), Array.from(), loops, spread operator, and mapping techniques.”

**Non-Destructive Alternatives Array Methods: toReversed, toSorted, toSpliced, with**

Traditional array methods like:
reverse()
sort()
splice()
modify the original array ❌

Modern JavaScript introduced non-destructive alternatives that return a new array without changing the original one ✅

🔥 1. toReversed()
👉 Non-destructive version of:
reverse()
🔍 Example
const arr = [1, 2, 3];
const reversed = arr.toReversed();
console.log(reversed);
console.log(arr);
✅ Output
[3, 2, 1]
[1, 2, 3]

🔸 Difference
| Method | Original Array |
| -------------- | -------------- |
| `reverse()` | Modified ❌ |
| `toReversed()` | Safe ✅ |

🔥 2. toSorted()
👉 Non-destructive version of:
sort()
🔍 Example
const arr = [3, 1, 2];
const sorted = arr.toSorted((a, b) => a - b);
console.log(sorted);
console.log(arr);
✅ Output
[1, 2, 3]
[3, 1, 2]

🔥 3. toSpliced()
👉 Non-destructive version of:
splice()
🔍 Example
const arr = [1, 2, 3, 4];
const result = arr.toSpliced(1, 2);

console.log(result);
console.log(arr);
✅ Output
[1, 4]
[1, 2, 3, 4]

🔥 Add values using toSpliced()
const arr = [1, 2, 3];
const result = arr.toSpliced(1, 0, 100);
console.log(result);
✅ Output
[1, 100, 2, 3]

🔥 4. with()
👉 Replace element at specific index without modifying original array
🔍 Example
const arr = [10, 20, 30];
const result = arr.with(1, 99);
console.log(result);
console.log(arr);
✅ Output
[10, 99, 30]
[10, 20, 30]

🔥 Why These Methods Matter
These are very useful in:
React state updates
Redux
Functional programming
Immutable data handling
🔸 Old Way (Before)
const sorted = [...arr].sort();
🔸 Modern Way
const sorted = arr.toSorted();
Cleaner and safer ✅

🔥 Comparison Table
| Mutating ❌ | Non-Destructive ✅ |
| ----------------------- | ----------------- |
| `reverse()` | `toReversed()` |
| `sort()` | `toSorted()` |
| `splice()` | `toSpliced()` |
| direct index assignment | `with()` |

⚠️ Browser Support
These are newer ES2023 features.
May not work in very old browsers.

🧠 Easy Way to Remember
Methods starting with:
to...
usually return a new array safely.

🚀One-Liner
“toReversed(), toSorted(), toSpliced(), and with() are modern non-mutating array methods that return modified copies instead of changing the original array.”
