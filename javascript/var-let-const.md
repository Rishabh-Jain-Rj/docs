# 🟨 var, let & const

This document explains **`var`, `let`, and `const`**

---

## 🔹 var

- Function scoped
- Hoisted and initialized with `undefined`
- Can be redeclared and reassigned
- Causes unexpected bugs ❌

```js
// var – function scoped
if (true) {
  var a = 10;
}

console.log(a); // 10
```

## 🔹 let

- Block scoped
- Hoisted but not initialized (Temporal Dead Zone)
- Cannot be redeclared in same scope
- Can be reassigned ✅

```js
// let – block scoped
if (true) {
  let b = 20;
}

console.log(b); // ReferenceError
```

## 🔹 const

- Block scoped
- Must be initialized at declaration
- Cannot be reassigned ❌
- Object/array mutation is allowed

```js
const user = { name: "Rishabh" };
user.name = "Jain"; // ✅ allowed
```

## Tricky Questions

### Question 1 – Shadowing + TDZ (Temporary Dead Zone) Trap

```js
let a = 10;

{
  console.log(a);
  let a = 20;
}
```

<details> <summary> Show Output</summary>

```
ReferenceError: Cannot access 'a' before initialization
```

</details>

### Question 2 – Loop Scope Trap (var vs let)

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

<details> <summary> Show Output</summary>

```
3
3
3
```

**Explanation:**

- `var` is function scoped
- All callbacks share the same i
- Loop completes first → i === 3

</details>
