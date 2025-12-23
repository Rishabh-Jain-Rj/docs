# 📌 `this` keyword ?

Refers to the **object that calls the function**.

- Its value is decided **at runtime**, not when the function is defined.
- **`this` in regular functions** → global object (`window` in browser, `undefined` in nodejs).
- **`this` in arrow functions** → inherited from the **outer lexical scope**.
- Depends entirely on **how** the function is called, not where it’s written.

---

## 🧠 Easy Rule

**`this` = who is calling the function**

---

## 🧪 Examples

### Example 1

```js
const user = {
  name: "Rishabh",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // Rishabh
```

### Example 2

```js
const user = {
  name: "Rishabh",
  greet() {
    console.log(this.name);
  },
};

const fn = user.greet;
fn();
```

<details> <summary>Show Output</summary>

```
undefined
```

### 🧠 Explanation

- `greet()` is a method of the `user` object
- Assigning `user.greet` to `fn` stores **only the function reference**
- When `fn()` is called, it is **not called by any object**
- Since there is no calling object, **default binding** applies
- In the browser, default binding sets `this` to `window`
- `window.name` is `undefined`

</details>

### Example 3

```js
const user = {
  name: "Rishabh",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 0);
  },
};

user.greet();
```

<details> <summary>Show Output</summary>

```
undefined
```

### 🧠 Explanation

- `greet()` is called by the `user` object
- The callback passed to `setTimeout` is a **regular function**
- `setTimeout` invokes the callback **without any object context**
- As a result, the callback becomes a **plain function call**
- **Default binding** applies → `this` becomes `window`
- `window.name` is `undefined`

</details>
