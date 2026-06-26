# Day 1 - React Fundamentals

## Root Element

The root element is the container where React renders the application.

Example:

<div id="root"></div>

---

## ReactDOM

Used to render React components into the browser.

Example:

ReactDOM.createRoot(...)

---

## Component

A React component is a reusable JavaScript function that returns JSX.

Example:

function App() {
  return <h1>Hello</h1>;
}

---

## JSX

JSX:

A syntax that allows us to write HTML-like code inside JavaScript files to create user interfaces.React converts JSX into JavaScript function calls before rendering.

Example:

<h1>ClassPulse</h1>

---

## App Component

Top-level component of the application.

Rendered by:

<App />

inside main.jsx

---

## Curly Braces {}

In JSX, curly braces are used to execute JavaScript expressions inside JSX.

Example:

const name = "Muhammad";

<h1>{name}</h1>

Output:

Muhammad

Think of {} as "enter JavaScript mode inside JSX".

---

## React Rendering Flow

JSX
↓
Converted to JavaScript
↓
React creates/updates DOM elements
↓
Browser renders them on the screen

React does not directly display JSX.
It first converts JSX into JavaScript and then uses that JavaScript to create and update DOM elements efficiently.

---

## Import & Export

export default:
Makes a function, variable, or component available to other files.

Example:

export default App;

---

import:
Brings an exported function, variable, or component into the current file.

Example:

import App from "./App";

---

Why?
  ~~React applications are divided into multiple files and components. Import and export allow components to communicate and be reused across files.

---

