# ⚛️ React Interview Questions

This document contains **important and tricky React interview questions** focused on **real understanding**, not memorization.

---

## Question 1

How can we return multiple elements from a component without using a parent `<div>` or `Fragment`?

<details>
<summary>Show Answer</summary>

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
<summary>Show Answer</summary>

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
<summary>Show Answer</summary>

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
<summary>Show Answer</summary>

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
<summary>Show Answer</summary>

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
