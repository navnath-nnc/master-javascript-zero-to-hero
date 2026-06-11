**Event Propagation in JavaScript**

Event Propagation is the process by which an event travels through the DOM tree when an event occurs (e.g., click, keypress).

When you click an element, the event passes through three phases:

1. Capturing Phase
2. Target Phase
3. Bubbling Phase

Example DOM:

<div id="parent">
  <button id="child">Click Me</button>
</div>

1. Capturing Phase (Top → Down)
   The event starts from the root (document) and travels down to the target element.
   Document
   ↓
   HTML
   ↓
   Body
   ↓
   Parent Div
   ↓
   Button

Capturing is not the default behavior.

parent.addEventListener(
'click',
() => {
console.log('Parent');
},
true
);

The third parameter true enables capturing.

2. Target Phase
   The event reaches the actual element that was clicked.

Button Clicked
This is the target element.

3. Bubbling Phase (Bottom → Up)
   After reaching the target, the event travels back up through its parent elements.

Button
↑
Parent Div
↑
Body
↑
HTML
↑
Document

Bubbling is the default behavior in JavaScript.

Example
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
console.log('Parent Clicked');
});

child.addEventListener('click', () => {
console.log('Button Clicked');
});
Output
Button Clicked
Parent Clicked

The event first runs on the button, then bubbles up to the parent.

stopPropagation(): Used to stop the event from propagating further.

child.addEventListener('click', (event) => {
event.stopPropagation();
console.log('Button Clicked');
});
Output
Button Clicked

The parent event handler will not execute.

Capturing vs Bubbling
| Capturing | Bubbling |
| ------------------- | ------------------ |
| Parent → Child | Child → Parent |
| Top → Down | Bottom → Up |
| Enabled with `true` | Default behavior |
| Less commonly used | Most commonly used |

Imporatant:
Event Propagation is the mechanism through which an event travels through the DOM. It consists of three phases: Capturing, Target, and Bubbling.

In the Capturing Phase, the event travels from the document down to the target element.
In the Target Phase, the event reaches the clicked element.
In the Bubbling Phase, the event travels from the target element back up to its parent elements.

By default, JavaScript uses event bubbling. We can stop propagation using event.stopPropagation() and enable capturing by passing true as the third argument to addEventListener().

Quick Trick:
Capturing = Parent → Child
Bubbling = Child → Parent

**Event Delegation in JavaScript**
Event Delegation is a technique where instead of attaching event listeners to multiple child elements, we attach one event listener to a parent element and handle events for its children using event bubbling.

Problem Without Event Delegation
Suppose you have 100 list items:

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

Without event delegation:
const items = document.querySelectorAll('li');

items.forEach(item => {
item.addEventListener('click', () => {
console.log(item.textContent);
});
});

❌ Creates a separate event listener for each <li>.

Using Event Delegation
Attach a single event listener to the parent.
const list = document.getElementById('list');

list.addEventListener('click', (event) => {
if (event.target.tagName === 'LI') {
console.log(event.target.textContent);
}
});

How It Works

When an <li> is clicked:

LI Clicked
↑
UL

The click event bubbles up from the <li> to the <ul>, and the parent listener handles it.

Why Use Event Delegation?

1. Better Performance

Instead of:

1000 items = 1000 listeners

Use:

1000 items = 1 listener

2. Works for Dynamically Added Elements
   const li = document.createElement('li');
   li.textContent = 'New Item';

list.appendChild(li);

The new item automatically works without adding another event listener.

Real-World Example

<ul id="users">
  <li data-id="1">John</li>
  <li data-id="2">Navnath</li>
</ul>
document.getElementById('users')
  .addEventListener('click', (event) => {

    if (event.target.matches('li')) {
      console.log(
        event.target.dataset.id
      );
    }

});

Output when clicking Navnath:
2

Event Delegation Uses Event Bubbling
Document
↑
Body
↑
UL
↑
LI (clicked)

Because events bubble upward, the parent can capture child events.

Important:
Event Delegation is a JavaScript technique where a single event listener is attached to a parent element instead of multiple child elements. It works because of event bubbling, where events triggered on child elements propagate up to their parent. Event Delegation improves performance, reduces memory usage, and automatically handles dynamically added elements.

One-Line:
Event Delegation is attaching an event listener to a parent element and using event bubbling to handle events from its child elements.

**DOM Traversing in JavaScript**
👉 Definition

DOM Traversing means:
Navigating between elements in the DOM tree (parent, child, sibling elements).

Example:

<div class="grandparent">
  <div class="parent">
    <p class="child">Hello</p>
  </div>
</div>
1. Traversing Downwards (Children)
children

Returns only element children.

const parent = document.querySelector('.parent');

console.log(parent.children);

Output:

<p class="child">Hello</p>

-firstElementChild
console.log(parent.firstElementChild);
Output:

<p class="child">Hello</p>

-lastElementChild
console.log(parent.lastElementChild);

Returns the last child element.

-querySelector()

Find descendants.
const child = parent.querySelector('.child');

2. Traversing Upwards (Parents)
   parentElement
   const child = document.querySelector('.child');

console.log(child.parentElement);

Output:

<div class="parent">

--closest()

Find nearest matching ancestor.

console.log(child.closest('.grandparent'));

Output:

<div class="grandparent">
Very common in event delegation.

3. Traversing Sideways (Siblings)
   -nextElementSibling
   const first = document.querySelector('.item1');
   console.log(first.nextElementSibling);

-previousElementSibling
console.log(first.previousElementSibling);
Example

<ul>
  <li class="item1">A</li>
  <li>B</li>
  <li>C</li>
</ul>
const item1 = document.querySelector('.item1');

console.log(item1.nextElementSibling);

Output:

<li>B</li>

Difference: children vs childNodes
children
Returns only element nodes.
parent.children

childNodes
Returns:
Elements
Text nodes
Comments
Whitespace
parent.childNodes

Real-World Example
Event Delegation

<ul id="list">
  <li>Angular</li>
  <li>React</li>
</ul>
document
  .getElementById('list')
  .addEventListener('click', (e) => {
    console.log(e.target.parentElement);
  });

Here:
e.target → clicked <li>
parentElement → <ul>

Common DOM Traversing Methods
| Direction | Method |
| --------- | ------------------------ |
| Down | `children` |
| Down | `firstElementChild` |
| Down | `lastElementChild` |
| Down | `querySelector()` |
| Up | `parentElement` |
| Up | `closest()` |
| Side | `nextElementSibling` |
| Side | `previousElementSibling` |

Grandparent
↑
Parent
↑
Child

Child.parentElement
Parent.closest('.grandparent')

Parent.children
Parent.firstElementChild

Item.nextElementSibling
Item.previousElementSibling

--One-Liner
DOM Traversing is the process of navigating between related DOM elements using properties like parentElement, children, closest(), nextElementSibling, and previousElementSibling to move up, down, or sideways in the DOM tree.

**Lifecycle DOM Events in JavaScript**

Lifecycle DOM events are events that occur during the loading and lifecycle of an HTML document.

They help us know:
When HTML is loaded
When DOM is ready
When all resources (images, CSS, scripts) are loaded
When the page is being unloaded

1. DOMContentLoaded
   👉 Fires when:
   HTML is fully parsed
   DOM tree is built
   Does NOT wait for:
   Images
   CSS
   External resources
   document.addEventListener('DOMContentLoaded', () => {
   console.log('DOM is ready');
   });
   Example
   <script>
   document.addEventListener('DOMContentLoaded', () => {
     const btn = document.querySelector('#btn');
     console.log(btn);
   });
   </script>

   ✅ Safe to access DOM elements.

2. load
   👉 Fires when:

Everything is loaded:
HTML
CSS
Images
Fonts
Scripts
window.addEventListener('load', () => {
console.log('Page fully loaded');
});
Timeline
HTML Parsing
↓
DOMContentLoaded
↓
Images/CSS Loaded
↓
load

3. beforeunload
   👉 Fires before user leaves page

Useful for:
Unsaved forms
Warning messages
window.addEventListener('beforeunload', (event) => {
event.preventDefault();
});

Example:
"Changes you made may not be saved."

4. unload
   👉 Fires when page is unloading
   window.addEventListener('unload', () => {
   console.log('Page closed');
   });

⚠️ Rarely used today because browsers limit what can be done during unload.

--Common Frontend Use Cases
-DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
initializeApp();
});

Initialize:
Event listeners
UI setup
Initial rendering

-load
window.addEventListener('load', () => {
hideLoader();
});
Hide loading spinner after all assets are loaded.

-beforeunload
window.addEventListener('beforeunload', (e) => {
if (formDirty) {
e.preventDefault();
}
});

Prevent accidental navigation.

Difference Between DOMContentLoaded and load

| Feature       | DOMContentLoaded             | load |
| ------------- | ---------------------------- | ---- |
| HTML Parsed   | ✅                           | ✅   |
| DOM Ready     | ✅                           | ✅   |
| Images Loaded | ❌                           | ✅   |
| CSS Loaded    | Usually not required to wait | ✅   |
| Faster        | ✅                           | ❌   |

-Important
Which event would you use to initialize a JavaScript application?

✅ Answer:
DOMContentLoaded

Because it fires as soon as the DOM is ready and doesn't wait for images and other resources.

-One-Liner

DOMContentLoaded fires when the DOM is fully parsed and ready, while load fires when the entire page including images, stylesheets, and other resources has finished loading. beforeunload and unload are used when the user leaves the page.

**Efficient Script Loading: defer vs async**

When a browser encounters a <script> tag, it normally:

Stops HTML parsing ⛔
Downloads the script
Executes the script
Continues parsing HTML

This can slow down page loading.

❌ Normal Script

<script src="app.js"></script>

Browser Behavior
HTML Parsing
↓ (stop)
Download JS
↓
Execute JS
↓
Continue HTML Parsing

This blocks page rendering.

✅ defer

<script defer src="app.js"></script>

Browser Behavior
HTML Parsing ────────────────►

JS Download ────────────────►

HTML Finished
↓
Execute JS
Characteristics
Downloads script in parallel with HTML parsing
Executes after HTML parsing is complete
Maintains script order
Ideal for most application scripts

Example:

<script defer src="vendor.js"></script>
<script defer src="app.js"></script>

Execution order:

vendor.js
app.js
Guaranteed ✅

✅ async

<script async src="analytics.js"></script>

Browser Behavior
HTML Parsing ───────────────►

JS Download ─────►
↓
Execute Immediately
↓
Resume HTML Parsing
Characteristics
Downloads in parallel
Executes immediately when download finishes
Does NOT wait for DOM parsing
Does NOT preserve order
Example

<script async src="script1.js"></script>
<script async src="script2.js"></script>

Possible execution:

script2.js
script1.js

or

script1.js
script2.js

Order is unpredictable ❌

When to Use defer
Use for:
React applications
Angular applications
Business applications
Scripts that depend on DOM
Multiple dependent scripts

Example:

<script defer src="main.js"></script>

When to Use async
Use for:
Google Analytics
Tracking scripts
Ads
Chat widgets
Independent third-party scripts

Example:

<script async src="analytics.js"></script>

Visual Comparison
defer
HTML Parse ─────────────────►
JS Download ────────────────►
Execute

async
HTML Parse ──────►
JS Download ─►
Execute
HTML Parse Continues

-Key Differences
| Feature | `defer` | `async` |
| -------------------------- | ------- | ------- |
| Blocks HTML parsing | ❌ | ❌ |
| Executes after DOM ready | ✅ | ❌ |
| Preserves script order | ✅ | ❌ |
| Suitable for app scripts | ✅ | ❌ |
| Suitable for analytics/ads | ❌ | ✅ |

Which would you use in a React or Angular application?

✅ Answer:

defer
Because application scripts often depend on the DOM and may need predictable execution order.

--One-Liner
defer downloads scripts in parallel and executes them after HTML parsing is complete while preserving order. async downloads scripts in parallel but executes them immediately when available, without guaranteeing order. For application code, defer is usually preferred; for independent third-party scripts, async is a better choice.
