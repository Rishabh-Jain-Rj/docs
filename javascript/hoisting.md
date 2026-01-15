# 🟨 What is a Hoisting?

Hoisting is JavaScript's behavior of registering declarations in memory before executing the code. Only **declarations** are hoisted, not initializations.

- `var` is hoisted and initialized with `undefined`
- `let` / `const` are hoisted but stay in the Temporal Dead Zone (TDZ) until initialization
- Function declarations are hoisted with their full body
- Hoisting happens during the compilation phase

### Example: var Hoisting

```js
console.log(a); // undefined
var a = 10;
```

### Example: let / const Hoisting (TDZ)

```js
console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

### Question

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

 </details>

## 🔹Function Hoisting in JavaScript

JavaScript handles hoisting differently for **function declarations** and **function expressions (including arrow functions)**.

---

### Function Declaration (Fully Hoisted)

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

### Function Expression (var) – Partially Hoisted

```js
sayHello(); // TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hello");
};
```

**Explanation:**

- Only the variable `sayHello` is hoisted
- It is initialized as `undefined`
- The function body is assigned later
  > If `let` or `const` is used in place of var, accessing it before declaration throws a **ReferenceError** because the variable is in the **Temporal Dead Zone (TDZ)**

### Important Note

> Function declarations are hoisted completely and take priority, while `var` is hoisted only as `undefined`, so function hoisting always comes first.
