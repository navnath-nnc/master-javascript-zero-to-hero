**DOM and DOM Manipulation**

🌐 What is the DOM?

DOM = Document Object Model

👉 It represents your HTML page as a tree of objects that JavaScript can interact with.

🧠 Simple Idea

HTML:

<h1>Hello</h1>
<p>Welcome</p>

DOM (structure):

Document
├── h1 → "Hello"
└── p → "Welcome"

👉 JavaScript can:

Read elements
Change content
Add/remove elements
🔍 Why DOM is Important

Without DOM:
❌ HTML is static

With DOM:
✅ You can make pages interactive

Change text
Handle clicks
Update UI dynamically
🧩 Selecting Elements (Very Important)

1. By ID
   const title = document.getElementById("title");
2. By Class
   const items = document.getElementsByClassName("item");
3. Query Selector (Most Used ✅)
   const el = document.querySelector(".box");
   const all = document.querySelectorAll("p");
   ✏️ DOM Manipulation (Changing Elements)
4. Change Text
   title.textContent = "New Title";
5. Change HTML
   title.innerHTML = "<span>Updated</span>";
6. Change Styles
   title.style.color = "blue";
   title.style.fontSize = "30px";
7. Add Class
   title.classList.add("active");
   ➕ Creating Elements
   const newPara = document.createElement("p");
   newPara.textContent = "Hello World";

document.body.appendChild(newPara);
❌ Removing Elements
newPara.remove();
🖱️ Event Handling (User Interaction)
Example: Button Click
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
alert("Button clicked!");
});
🔄 Real Example
HTML:

<h1 id="title">Hello</h1>
<button>Change Text</button>
JavaScript:
const title = document.getElementById("title");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
title.textContent = "Text Changed!";
});

👉 Click button → text updates

⚡ Common DOM Methods
Method Use
getElementById() Select by ID
querySelector() Select first match
querySelectorAll() Select all
createElement() Create element
appendChild() Add element
remove() Delete element
⚠️ Important Tips
DOM loads after HTML → use script at bottom or DOMContentLoaded
Avoid too much innerHTML (can overwrite content)
Prefer querySelector for flexibility
