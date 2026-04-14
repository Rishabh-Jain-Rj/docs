# ⚛️ React Interview Questions

This document contains **important and tricky React interview questions** focused on **real understanding**, not memorization.

---

## Question 1

How can we return multiple elements from a component without using a parent `<div>` or `Fragment`?

<details>
<summary><b>Show Answer</b></summary>

```js
function Example() {
  return [<h1 key="1">Hello</h1>, <p key="2">World</p>];
}
```

We can return multiple elements by returning them as an **array of elements**.

**Explanation:**

- JSX normally requires a **single parent element**.
- Instead of using `<div>` or `Fragment`, we can return an **array**.
- Each element in the array must have a **unique `key`**.
- React treats the array as a valid return value.
- It is less commonly used but valid.

## </details>

---

## Question 2

What will be the output of the following code using `setInterval`, and why does it behave this way?

```js
function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <h1>{count}</h1>;
}
```

<details>
<summary><b>Show Answer</b></summary>

```
1
```

(The value updates to 1 and then stops)

**Explanation:**

- `useEffect([])` runs only once.
- `setInterval` captures the initial value of `count` (`0`).
- Because of **closure**, it keeps using this old value.
- So `setCount(count + 1)` always sets the state to `1`.
- React does not re-render again because the value doesn’t change.

> `setInterval` keeps calling the same function and remembers old values due to closure.

**Fix:**

Use a functional update to get the latest state value.

```js
setCount((prev) => prev + 1);
```

</details>

---

## Question 3

What is the difference between **Browser Storage options** (`localStorage`, `sessionStorage`, and `cookies`)?

<details>
<summary><b>Show Answer</b></summary>

### 📊 Difference

| Feature                            | localStorage                                                       | sessionStorage                                              | Cookies                                                                             |
| ---------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **How long data stays**            | Stays forever unless user clears browser or you remove it manually | Stays only until that tab is open                           | You decide expiry time (minutes, days, etc.)                                        |
| **Works across tabs?**             | Yes, all tabs of same website can use it                           | No, each tab gets its own storage                           | Yes, works across tabs                                                              |
| **Storage size**                   | Stores large data (about 5MB total per website)                    | Stores large data (about 5MB per tab)                       | Stores very small data (about 4KB per cookie and limited total cookies per website) |
| **Sent to backend automatically?** | No                                                                 | No                                                          | Yes, cookies go with every request                                                  |
| **Where it is mostly used**        | Saving theme, user preferences, UI settings                        | Temporary things like form steps, OTP flow, wizard progress | Login sessions, authentication, tracking                                            |

</details>

---

## Question 4

What is the difference between **Reflow** and **Repaint** in browsers?

<details>
<summary><b>Show Answer</b></summary>

| Feature      | Reflow                                         | Repaint                                                   |
| ------------ | ---------------------------------------------- | --------------------------------------------------------- |
| Definition   | Browser recalculates layout of elements        | Browser redraws visual appearance without changing layout |
| Triggered by | Width/height, DOM changes, font/margin changes | Color, background, shadow, visibility                     |
| Performance  | Expensive                                      | Cheaper                                                   |

</details>

---

## Question 5

What is the difference between Controlled and Uncontrolled components in React?

<details>
<summary><b>Show Answer</b></summary>

**Controlled Component**  
React controls the input using state.

```js
<input value={name} onChange={(e) => setName(e.target.value)} />
```

**Uncontrolled Component**  
The input manages its own value using `ref`.

```js
<input ref={inputRef} />
```

---

### Simple Difference

👉 Controlled → React controls the input  
👉 Uncontrolled → DOM controls the input

</details>

---

## Question 6

What is `useLayoutEffect` in React?

<details>
<summary><b>Show Answer</b></summary>

**useLayoutEffect** runs before the screen updates (before the user sees the UI).

```js
useLayoutEffect(() => {
  console.log("Runs before paint");
}, []);
```

---

### Simple Difference

👉 **useEffect** → runs after screen updates  
👉 **useLayoutEffect** → runs before screen updates

---

### When to use

👉 Fix UI before user sees it (no flicker)  
👉 Measure DOM (height, width, etc.)

</details>

## Question 7

Why are React state updates asynchronous instead of synchronous?

<details>
<summary><b>Show Answer</b></summary>

React updates state asynchronously to **keep the app fast and avoid extra re-renders**.

```javascript
setCount(1);
setCount(2);
setCount(3);
```

👉 Instead of updating 3 times, React updates only once.

This helps:

- Make the app faster
- Avoid unnecessary updates

> **Simple idea:** React waits a little and updates everything together (this process is known as _batching_).

</details>

## Question 8

What is the difference between State and Props in React?

<details>
<summary><b>Show Answer</b></summary>

| Feature          | State                                  | Props                             |
| :--------------- | :------------------------------------- | :-------------------------------- |
| **Definition**   | Data managed **inside** the component. | Data passed **to** the component. |
| **Mutatability** | Can be changed (Mutable).              | Read-only (Immutable).            |
| **Ownership**    | Owned by the component itself.         | Owned by the parent component.    |

</details>

## Question 9

What are Pure Components in React?

<details>
<summary><b>Show Answer</b></summary>

A **Pure Component** is a component that only re-renders if its **props or state** have actually changed.

```javascript
// In Class Components:
class MyComponent extends React.PureComponent { ... }

// In Functional Components:
const MyComponent = React.memo((props) => { ... });
```

👉 By default, a regular component re-renders whenever its parent re-renders. A Pure Component performs a **"shallow comparison"** to check for changes first.

This helps:

- **Boost performance** by skipping unnecessary re-renders.
- **Optimize** large lists or complex UI trees.

> **Simple idea:** If the input (props/state) looks exactly the same as last time, React skips the work of rendering it again.

</details>

## Question 10

How can you optimize the performance of a React application?

<details>
<summary><b>Show Answer</b></summary>

Performance in React is mostly optimized by **reducing re-renders** and **decreasing bundle size**.

### 1. Prevent Unnecessary Re-renders

- **`React.memo`**: Skips re-rendering a component if its props haven't changed.
- **`useCallback`**: Memoizes functions so they aren't re-created on every render.
- **`useMemo`**: Memoizes expensive calculations.

### 2. Efficient Rendering

- **Windowing/Virtualization**: Only render items currently visible on the screen (using libraries like `react-window`).
- **Lazy Loading**: Use `React.lazy` and `Suspense` to load components only when needed.

### 3. Best Practices

- **State Colocation**: Keep state as close to where it's used as possible to limit the "render impact."
- **Keys**: Always use unique and stable `key` props for list items.

> **Simple idea:** Don't do the same work twice. If data hasn't changed, tell React to skip the render.

</details>

---
