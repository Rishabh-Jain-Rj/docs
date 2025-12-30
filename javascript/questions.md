# 📌 Tricky Questions & Explanations

A collection of **common tricky JavaScript questions** that test your understanding of **hoisting, scope, type coercion, and reference concepts**.

---

## 🧠 Question 1

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

## 🔢 Question 2

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

## 🧮 Question 3

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

## ⚖️ Question 4

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

## 🧱 Question 5

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

## 🧱 Question 6

```
console.log([] == ![]);
```

<details> <summary> Show Output</summary>

```
true
```

**Explanation:**

- `[]` is an object, and all objects in JavaScript are **truthy**.
- `![]` converts the truthy value to `false`.
- The comparison becomes `[] == false`.
- With `==`, JavaScript performs **type coercion**.
- `false` is converted to the number `0`.
- `[]` is converted to an empty string `""`.
- The empty string `""` is converted to the number `0`.
- Finally, `0 == 0` evaluates to `true`.

</details>

## 💡 One‑Liner Summary

> Most JavaScript “tricks” come from **hoisting**, **type coercion**, and **reference behavior** — master these, and no question will surprise you again 🚀
