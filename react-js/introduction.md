# ⚛️ React.js – Introduction & Why React

## What is React?

React.js is an **open-source JavaScript library** used to build **fast, scalable, and interactive user interfaces**, mainly for **Single Page Applications (SPAs)**.

It follows a **component-based** and **declarative** approach to UI development.

> **Declarative approach** means describing what the UI should look like, while React takes care of how it updates.

---

## Why React is Needed?

Before React, websites were built using **HTML, CSS, and JavaScript**, where developers had to **manually update the DOM**.

### Example Without React (Plain JavaScript)

```html
<p id="count">0</p>
<button onclick="increase()">Increase</button>

<script>
  let count = 0;

  function increase() {
    count++;
    document.getElementById("count").innerText = count;
  }
</script>
```

### Problems with Manual DOM Updates

- Developers must manually update the DOM every time data changes
- The same data may control multiple parts of the UI
- UI logic and DOM manipulation code get mixed together
- Small UI changes require updates in many places
- Code becomes hard to read, debug, and maintain

Managing UI becomes confusing in large applications.

## How React Solves This

React changes how UI is built by making it **state-driven**.

Instead of manually changing the DOM, you only update **data (state)** and React takes care of the UI.

```js
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

### What React Does

- You update only the **state**
- You do **not** touch the DOM manually
- React updates the UI automatically
- UI always stays in sync with data
- Code remains clean and predictable

## In Simple Words

React is needed because manually managing the DOM becomes difficult as applications grow.  
React removes this complexity by automatically updating the UI based on data changes.

---

## Key Features of React

| Feature                     | Explanation                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| **Component-Based**         | UI is built using small, reusable components. Each component handles its own UI and logic.  |
| **Declarative UI**          | You describe what the UI should look like, and React handles UI updates when data changes.  |
| **State-Driven UI**         | UI depends on state. When state changes, the UI updates automatically.                      |
| **Virtual DOM**             | React uses a Virtual DOM to update only the changed parts of the UI for better performance. |
| **JSX**                     | JSX allows writing HTML-like code inside JavaScript, making UI code easier to read.         |
| **One-Way Data Flow**       | Data flows from parent to child components, making the app predictable and easier to debug. |
| **Reusable & Maintainable** | Components can be reused across the app, keeping the code clean and easy to maintain.       |
