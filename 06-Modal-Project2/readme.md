**Handling click events and classes in DOM**
**querySelector, querySelectorAll, addEventListener, and classList**

🔍 1. querySelector()

👉 Selects the first matching element from the DOM.

✅ Syntax
document.querySelector("selector");
📌 Examples
const title = document.querySelector("h1"); // by tag
const box = document.querySelector(".box"); // by class
const item = document.querySelector("#item"); // by id

👉 Returns only the first match

🔍 2. querySelectorAll()

👉 Selects all matching elements

✅ Syntax
document.querySelectorAll("selector");
📌 Example
const items = document.querySelectorAll(".item");

items.forEach(function(item) {
console.log(item);
});

👉 Returns a NodeList (like an array)

⚠️ Difference
Method Returns
querySelector First element
querySelectorAll All elements
🖱️ 3. addEventListener()

👉 Used to handle events (click, hover, keypress, etc.)

✅ Syntax
element.addEventListener("event", function);
📌 Example
const button = document.querySelector("button");

button.addEventListener("click", function() {
console.log("Button clicked!");
});
🎯 Common Events
"click"
"mouseover"
"keydown"
"submit"
🧱 4. classList Methods

👉 Used to add, remove, or toggle CSS classes

✅ Methods
➕ Add class
element.classList.add("active");
➖ Remove class
element.classList.remove("active");
🔄 Toggle class
element.classList.toggle("active");

👉 Adds if not present, removes if present

✅ Check class
element.classList.contains("active");
💻 Combined Example (Real Use Case)
HTML:
<button id="btn">Click Me</button>

<div class="box"></div>
JavaScript:
const btn = document.querySelector("#btn");
const box = document.querySelector(".box");

btn.addEventListener("click", function() {
box.classList.toggle("active");
});
CSS:
.active {
background-color: yellow;
}

👉 Click button → class toggles → style changes

🧠 Key Takeaways
querySelector → first match
querySelectorAll → all matches
addEventListener → handles user actions
classList → controls CSS classes dynamically
