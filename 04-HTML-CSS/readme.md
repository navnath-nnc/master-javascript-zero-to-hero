**HTML Basics**

Here’s a simple, beginner-friendly guide to the basics of HTML 👇

🌐 What is HTML?

HTML (HyperText Markup Language) is used to create the structure of web pages.

👉 It tells the browser:

What is a heading
What is a paragraph
What is a link, image, etc.
🧱 Basic Structure of an HTML Page

<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>

  <h1>Hello World</h1>
  <p>This is my first webpage.</p>

</body>
</html>
🧠 Explanation
<!DOCTYPE html> → tells browser it's HTML5
<html> → root element
<head> → contains meta info (title, links, etc.)
<body> → visible content
🔤 Common HTML Tags
1. Headings
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Smaller Heading</h3>

👉 <h1> is biggest, <h6> is smallest

2. Paragraph
<p>This is a paragraph.</p>
3. Links
   <a href="https://google.com">Visit Google</a>

👉 href = destination URL

4. Images
   <img src="image.jpg" alt="Description">

👉 src = image path
👉 alt = text if image doesn’t load

5. Lists
Unordered List (bullets)
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
Ordered List (numbers)
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
6. Buttons
   <button>Click Me</button>
   🧩 HTML Attributes

Attributes give extra info.

<a href="https://google.com" target="_blank">Open Google</a>
href → link
target="\_blank" → open in new tab
🧱 Basic Page Example

<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>

  <h1>Welcome</h1>
  <p>This is my website.</p>

<a href="#">Click here</a>

  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

</body>
</html>
⚡ Key Points
HTML = structure, not styling
Tags usually come in pairs: <tag></tag>
Browser reads HTML top to bottom
No programming logic (that’s JavaScript)

**CSS Basics**
🎨 What is CSS?

CSS (Cascading Style Sheets) is used to style HTML elements.
👉 It controls:

Colors
Fonts
Spacing
Layout
🧱 Basic CSS Syntax
selector {
property: value;
}
📌 Example
h1 {
color: blue;
font-size: 30px;
}

👉 This makes all <h1> text blue and larger.

🔗 Ways to Add CSS

1. Inline CSS
<h1 style="color: red;">Hello</h1>

👉 Not recommended for large projects

2. Internal CSS
<style>
  p {
    color: green;
  }
</style>

👉 Written inside <head>

3. External CSS (Best)
<link rel="stylesheet" href="styles.css">

👉 Keeps code clean and reusable

🎯 Common Selectors

1. Element Selector
   p {
   color: black;
   }
2. Class Selector
   .box {
   background-color: yellow;
   }

👉 HTML:

<div class="box"></div>
3. ID Selector
#title {
  color: red;
}

👉 HTML:

<h1 id="title"></h1>
🌈 Common CSS Properties
🎨 Colors
color: red;
background-color: lightblue;
🔤 Text Styling
font-size: 20px;
font-family: Arial;
text-align: center;
📦 Box Model

Every element is a box:

div {
width: 200px;
padding: 10px;
border: 2px solid black;
margin: 20px;
}

👉 Order:
Content → Padding → Border → Margin

📐 Layout Basics

1. Display
   display: block;
   display: inline;
   display: flex;
2. Flexbox (Very Important)
   .container {
   display: flex;
   justify-content: center;
   align-items: center;
   }

👉 Used for layout and alignment
🧪 Example: Styled Page
HTML:

<h1 class="title">Welcome</h1>
<p>This is styled text.</p>
CSS:
.title {
  color: blue;
  text-align: center;
}

p {
font-size: 18px;
color: gray;
}
⚡ Key Points
CSS styles HTML
Use external CSS for real projects
Classes (.) are reusable
IDs (#) are unique
Learn Flexbox early

**Box Model in CSS**
The CSS Box Model is one of the most important concepts in CSS. It explains how every HTML element is treated as a rectangular box.

📦 What is the Box Model?

Every element on a webpage is made of 4 layers:

Margin → Border → Padding → Content
🧱 Parts of the Box Model

1. 📝 Content (Inner part)

This is the actual content:

Text
Image
etc.
width: 200px;
height: 100px; 2. 📦 Padding (Space inside the box)

Space between content and border

padding: 10px;
👉 Adds space inside the element

3. 🧱 Border
   Wraps around padding and content

border: 2px solid black; 4. 🌐 Margin (Outer space)
Space outside the element

margin: 20px;

👉 Controls spacing between elements

📊 Visual Structure
+----------------------+
| Margin |
| +----------------+ |
| | Border | |
| | +----------+ | |
| | | Padding | | |
| | | +------+ | | |
| | | |Content| | | |
| | | +------+ | | |
| | +----------+ | |
| +----------------+ |
+----------------------+
💻 Example
div {
width: 200px;
padding: 20px;
border: 5px solid black;
margin: 10px;
}
🧮 Total Size Calculation

By default:

Total Width = width + padding + border + margin

👉 Example:

width = 200
padding = 20 + 20 = 40
border = 5 + 5 = 10

Total = 250px (without margin)
⚠️ Important: box-sizing
Default (content-box)
box-sizing: content-box;

👉 Width = only content (padding & border added extra)

Better Option: border-box ✅
box-sizing: border-box;

👉 Width includes:

content
padding
border

👉 Easier to manage layouts

🎯 Example with border-box
div {
width: 200px;
padding: 20px;
border: 5px solid black;
box-sizing: border-box;
}

👉 Total width = 200px (fixed)

⚡ Quick Summary
Every element = box
4 parts:
Content
Padding
Border
Margin
Default adds extra size
Use box-sizing: border-box for better control
🧠 Easy Way to Remember

👉 Content → Padding → Border → Margin
