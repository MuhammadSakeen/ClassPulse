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

# Day 2 - React Components & Component Composition

## Why do we split components into separate files?

* Improves code organization.
* Makes components reusable.
* Easier to maintain and debug.
* Keeps files small and readable.

---

## Component Composition (Component Nesting)

A component can render other components.

Example:

```jsx
function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
```

This helps build large applications using smaller reusable components.

---

## Single Root Element Rule

A React component must return exactly one root element.

❌ Invalid

```jsx
return (
  <Header />
  <Footer />
);
```

✅ Valid

```jsx
return (
  <div>
    <Header />
    <Footer />
  </div>
);
```

or

```jsx
return (
  <>
    <Header />
    <Footer />
  </>
);
```

---

## React Fragment

Syntax:

```jsx
<>
  ...
</>
```

or

```jsx
<React.Fragment>
  ...
</React.Fragment>
```

Purpose:
Allows returning multiple elements without creating an extra DOM element.

Advantages:

* Cleaner DOM
* Avoids unnecessary divs
* Prevents CSS/Flex/Grid issues
* Slightly improves performance

---

## Component Execution Order

React executes components from Parent → Child.

Example:

```jsx
<App />
```

Execution Order:

1. App()
2. Header()
3. Footer()

Flow:

```text
<App />
    ↓
App()
    ↓
Header()
    ↓
Footer()
```

---

## Important Note

In React, when state changes:

```text
State Changes
      ↓
Component Executes Again
      ↓
Child Components Execute Again
      ↓
React Updates DOM
      ↓
Browser Updates Screen
```

This process is called Re-rendering.

---

## Props

Props (Properties) are used to pass data from a Parent Component to a Child Component.

React passes props as a JavaScript object containing key-value pairs.

Example:

<Projects
  name="ClassPulse"
  number={1212}
/>

becomes:

{
  name: "ClassPulse",
  number: 1212
}

---

### Passing Values

Without {}:
prop="value"
→ Passed as a string.

With {}:
prop={expression}
→ JavaScript expression is evaluated and the result is passed.

Examples:

name="Muhammad"      // string
age={20}             // number
isPresent={true}     // boolean
marks={[90,95]}      // array

---


