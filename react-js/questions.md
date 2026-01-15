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

</details>

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
