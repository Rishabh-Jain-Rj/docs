# 🟨 Memoization

Memoization is a way to **store a function’s output** and **reuse it** when the same input comes again.

---

## In Simple Terms

- Save the result once
- Use the saved result next time
- Avoid running the function again

## Basic Example (Without Memoization)

```js
function add(a, b) {
  return a + b;
}

add(2, 3); // computed every time
add(2, 3); // computed again
```

## With Memoization

```js
function memoizedAdd() {
  const cache = {};

  return function (a, b) {
    const key = `${a},${b}`;

    if (cache[key]) {
      return cache[key];
    }

    const result = a + b;
    cache[key] = result;
    return result;
  };
}

const add = memoizedAdd();

add(2, 3); // calculated
add(2, 3); // returned from cache
```
