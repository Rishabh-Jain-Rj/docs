# Tricky Questions & Explanations

A collection of **common tricky JavaScript questions** that test your understanding of **hoisting, scope, type coercion, and reference concepts**.

---

## 🧠 Question 1 – Hoisting Inside a Function

```
var x = 20;

const foo = () => {
console.log(x);
var x = 10;
};

foo();
```

<details> <summary> Show Output</summary>

```
undefined
```

**Explanation:**

- `var x` is **hoisted** inside the function but only the **declaration** (not the value).
- It’s initialized as `undefined`, so `console.log(x)` logs `undefined`.
- The **global `x = 20`** is not accessed because function scope takes priority.

## </details>

## 🔢 Question 2 – String and Number Conversion

```
console.log("5" + 4);
console.log("5" - 4);
```

<details> <summary> Show Output</summary>

```
54
1
```

**Explanation:**

- `"5" + 4` → String concatenation (results in `"54"`).
- `"5" - 4` → The subtraction operator converts `"5"` to a number → `5 - 4 = 1`.

</details>

## 🧮 Question 3 – typeof NaN

```
console.log(typeof NaN);
```

<details> <summary> Show Output</summary>

```
number
```

**Explanation:**

`NaN` means _Not‑a‑Number_, but by JavaScript’s design, its type is still `"number"`.

</details>

## ⚖️ Question 4 – NaN Equality Check

```
console.log(NaN === NaN);
```

<details> <summary> Show Output</summary>

```
false
```

**Explanation:**

- Each `NaN` is a unique invalid number value.
- In JavaScript, `NaN` is **not equal** to anything, including itself.
- Use `Number.isNaN(value)` to properly check for NaN.

</details>

## 🧱 Question 5 – Hoisting and Implicit Globals

```
console.log(a);
console.log(b);
var a = b = 5;
```

<details> <summary> Show Output</summary>

```
undefined
ReferenceError: b is not defined (in strict mode)
```

**Explanation:**

- Only `a` is declared with `var`, so it’s **hoisted** and initialized as `undefined`.
- `b = 5` creates an **implicit global** (undeclared variable).
- In **strict mode**, accessing it before declaration causes a ReferenceError.

</details>

## 📘 Quick Concepts Recap

| Concept             | Description                                         |
| ------------------- | --------------------------------------------------- |
| **Hoisting**        | Declarations are moved to the top before execution. |
| **`var`**           | Function-scoped and hoisted with `undefined`.       |
| **`let` / `const`** | Block-scoped; not hoisted (temporal dead zone).     |
| **`NaN`**           | Type is `"number"`, not equal to itself.            |
| **Type Coercion**   | `"5" + 2` → `"52"`, `"5" - 2` → `3`.                |

---

## 💡 One‑Liner Summary

> Most JavaScript “tricks” come from **hoisting**, **type coercion**, and **reference behavior** — master these, and no question will surprise you again 🚀
