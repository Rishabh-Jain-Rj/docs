# 📌 Polyfill

A **polyfill** is extra JavaScript code written for **older browsers** so they can **support features available in modern browsers**.

> A polyfill adds modern features to older browsers without affecting modern ones.

---

## Why Polyfills are used

- To use **modern JavaScript features** safely
- To support **older browsers**
- To prevent runtime errors

---

## Simple Example

```js
// Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}
```

**Explanation**

- Checks if `includes()` **does not exist** in the browser
- Adds `includes()` to `Array.prototype` so **all arrays** can use it
- `this` refers to the array on which `includes()` is called
- Uses `indexOf()` internally to return `true` or `false`
