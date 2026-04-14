# 🗑️ Remove Duplicates from Array

## 📌 Problem Statement

Write a function that takes an array and returns a new array with all duplicate elements removed.

### Example

```js
Input: [1, 2, 2, 3, 4, 4, 5];
Output: [1, 2, 3, 4, 5];
```

<details> <summary>Click to view solution</summary>

```js
function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]
```

### Explanation

- We create an empty array called `unique`.
- We loop through the input array and check if the current element is already inside our `unique` array using `.includes()`.
- If it's not there, we push it in. This effectively ignores any value we've already seen.

## 🔄 Other Short Ways

### 1️⃣ Using Set (The Most Popular Way)

<details> <summary>View code</summary>

```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

### Explanation

- A `Set` is a built-in JavaScript object that **only allows unique values**.
- Passing an array into `new Set(arr)` automatically strips duplicates.
- The spread operator `[...]` converts the Set back into a standard array.
</details>

</details>
