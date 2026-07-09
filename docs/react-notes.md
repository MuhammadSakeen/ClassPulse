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

# Day 3 - React Event Handling & State

---

# Event Handling

React allows us to respond to user actions such as:

- Button Clicks
- Typing in Inputs
- Form Submission
- Mouse Events

Examples:

```jsx
onClick
onChange
onSubmit
onMouseEnter
onMouseLeave
```

---

## Event Handler Function

An event handler is a normal JavaScript function that executes when an event occurs.

Example:

```jsx
function clickHandler() {
  console.log("Hello");
}

<button onClick={clickHandler}>
  Click Me
</button>
```

Output (after clicking):

```text
Hello
```

---

## Passing Function Reference vs Calling Function

### ✅ Correct

```jsx
<button onClick={clickHandler}>
```

Meaning:

```text
Pass the function to React.
Execute it later when the button is clicked.
```

---

### ❌ Incorrect

```jsx
<button onClick={clickHandler()}>
```

Meaning:

```text
Execute the function immediately during rendering
and pass its return value to onClick.
```

Example:

```jsx
function clickHandler() {
  console.log("Hello");
}

<button onClick={clickHandler()} />
```

Output:

```text
Hello
```

prints immediately when the page loads.

---

## Why?

Curly braces `{}` evaluate JavaScript expressions immediately.

Parentheses `()` execute functions immediately.

```text
{}  → Enter JavaScript Mode
()  → Execute Function
```

---

## Arrow Function in Event Handlers

This is valid:

```jsx
<button onClick={() => clickHandler()}>
```

React stores the arrow function and executes it later.

Flow:

```text
Button Click
      ↓
Arrow Function Executes
      ↓
clickHandler() Executes
```

---

# State

State is data that can change over time.

When state changes, React re-renders the component.

Examples:

- Counter value
- Input value
- Logged-in status
- Theme (Dark/Light)
- Form data

---

## useState Hook

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [count, setCount] = useState(0);
```

---

## What does useState return?

It returns an array containing:

1. Current state value.
2. Function to update the state.

Example:

```jsx
const [count, setCount] = useState(0);
```

Equivalent:

```text
count      → Current State
setCount() → Function to update state
```

---

## Updating State

Example:

```jsx
setCount(1);
```

React updates the state and re-renders the component.

---

# React Re-render Flow

```text
User Action
      ↓
setState()
      ↓
State Changes
      ↓
Component Executes Again
      ↓
New JSX Returned
      ↓
React Updates DOM
      ↓
Browser Updates Screen
```

---

## Re-rendering

A component re-renders whenever its state changes.

Example:

```jsx
function App() {
  const [count, setCount] = useState(0);

  console.log("Rendered");

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Every click:

```text
State Changes
      ↓
Component Executes Again
      ↓
"Rendered" prints again
```

---

## State Updates are Asynchronous

Calling:

```jsx
setCount(count + 1);
```

does NOT immediately change `count`.

Example:

```jsx
function clickHandler() {
  setCount(count + 1);
  console.log(count);
}
```

Suppose:

```text
count = 1
```

Output:

```text
1
```

because React updates the state after the current event handler finishes executing.

---

## Important Rule

```text
setState()
does not immediately update the state variable.
It schedules the update.
```

---

## Multiple State Updates

Example:

```jsx
setCount(count + 1);
setCount(count + 1);
```

Suppose:

```text
count = 0
```

Both become:

```jsx
setCount(1);
setCount(1);
```

Final state:

```text
1
```

NOT:

```text
2
```

---

## Functional State Updates

To update based on the latest state:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Execution:

```text
prev = 0 → 1
prev = 1 → 2
```

Final state:

```text
2
```

---

## State Equality Optimization

React skips re-rendering if the new state is equal to the old state.

Example:

```jsx
setCount(5);
```

Current state:

```text
count = 5
```

Result:

```text
No re-render.
```

---

# React Strict Mode

In development mode:

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

React intentionally renders components twice to detect bugs.

Example:

```text
Rendered
Rendered
```

This happens only in development and not in production.

---

# Important Difference

```text
Normal Variable
      ↓
Changes value
      ↓
UI does NOT update

State Variable
      ↓
Changes value
      ↓
React re-renders
      ↓
UI updates
```

---

# Key Takeaways

✅ State stores dynamic data.

✅ useState returns:

```text
[state, setState]
```

✅ setState schedules an update.

✅ State changes trigger re-rendering.

✅ React skips re-render if state remains the same.

✅ Event handlers should receive a function reference.

✅ `onClick={fn}` is correct.

✅ `onClick={fn()}` executes immediately.

✅ `onClick={() => fn()}` is also correct.

---

## State is Immutable

Never modify state directly.

Arrays:

❌ students.push("Ahmed");

✅ setStudents([...students, "Ahmed"]);

Objects:

❌ person.name = "Sakeen";

✅ setPerson({
  ...person,
  name: "Sakeen"
});

Reason:
React detects state changes using new references and re-renders the component accordingly.

---

# Day 4 - Conditional Rendering & Lists

---

## Conditional Rendering

Conditional Rendering means rendering different JSX based on a condition.

---

### Ternary Operator

Syntax:

```jsx
condition
  ? JSX1
  : JSX2
```

Example:

```jsx
{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}
```

---

### && Operator

Syntax:

```jsx
condition && JSX
```

Example:

```jsx
{
  isFaculty &&
  <button>Create Session</button>
}
```

Renders the JSX only when the condition is true.

---

## Dynamic Lists using map()

map() is used to create JSX for every element in an array.

Syntax:

```jsx
array.map((item) => {
  return JSX;
});
```

Example:

```jsx
const students = [
  "Ali",
  "Muhammad",
  "Ahmed"
];

students.map((student) => {
  return <p>{student}</p>
})
```

Output:

Ali
Muhammad
Ahmed

---

## Why use map()?

Applications often display arrays of data:

- Students
- Notifications
- Products
- Messages
- Attendance Sessions

Instead of writing JSX repeatedly, map() creates UI dynamically.

---

## ClassPulse Examples

students.map(...)
notifications.map(...)
sessions.map(...)

---

## Controlled Components (Forms)

A controlled component is an input element whose value is controlled by React state.

Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Flow:

User Types
↓
event.target.value
↓
setState()
↓
State Updates
↓
Component Re-renders
↓
Input Displays Updated State

Why?

React becomes the single source of truth for the input value.

Without `value={state}`, the browser controls the input.

With `value={state}`, React controls the input.

---

## Derived State

If a value can be calculated from existing state, don't create another state for it.

❌

```jsx
const [isPoor, setIsPoor] = useState(false);
```

✅

```jsx
const isPoor = attendance < 75;
```

Reason:

Derived values should be calculated during rendering instead of being stored as separate state.

---
