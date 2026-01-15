# 🟨 What is Currying?

**Currying** is a technique where a function **takes one argument at a time**  
and **returns another function** until all arguments are received.

---

## Normal Function

```js
function add(a, b) {
  return a + b;
}

add(2, 3); // 5
```

## Curried Function

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(2)(3); // 5
```

**How it works**

- `add(2)` → returns a function and remembers `a = 2`
- `(3)` → executes the inner function
- Final result → `2 + 3 = 5`

## Important Points

- Currying works using **closures**
- Each function takes **one argument at a time**
- Returns a **new function** until the final result is produced
- Makes functions **reusable and predictable**
- Common in **functional programming**
