# 📦 Flatten a Nested Array (Without Duplicates)

## 📌 Problem Statement

Write a function that takes a **nested array** as input and returns a **single flattened array**.  
The returned array should **not contain duplicate values**.

### Example

```js
Input: [1, [2, 3], [4, [5, 6, 2]], 3];
Output: [1, 2, 3, 4, 5, 6];
```

<details> <summary>Click to view solution</summary>

```js
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
```

### Explanation

- We pass `result` into the function so every recursive call can use the same array to store values.
- Go through each item of the array one by one.
- If the item is another array, call the same function again to flatten it.
- If the item is a normal value, check if it is already present in `result`.
- If it is not present, add it to `result`.
- This keeps running until all nested arrays are processed and collected into one final array.

## 🔄 Another Easy Way (Using flat + Set)

<details> <summary>Click to view solution</summary>

```js
function flattenArray(arr) {
  return [...new Set(arr.flat(Infinity))];
}

console.log(flattenArray([1, [2, 3], [4, [5, 6, 2]], 3]));
```

### Explanation

- `flat(Infinity)` converts the nested array into a single flat array.
- `Set` automatically removes duplicate values.
- The spread operator `...` converts the `Set` back into a normal array.
</details>

</details>
