# 🥈 Find Second Largest Element

## 📌 Problem Statement

Write a function that takes an array of numbers and returns the **second largest** element. If the array has fewer than two unique numbers, return `null` or a message.

### Example

```js
Input: [10, 5, 20, 8, 20];
Output: 10;
```

<details> <summary>Click to view solution</summary>

```js
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

console.log(secondLargest([10, 5, 20, 8, 20]));
// Output: 10
```

### Explanation

- We track two variables: `first` and `second`, both starting at the lowest possible value.
- As we loop through the array:
  - If the current number is bigger than `first`, the old `first` becomes the `second`, and we update `first`.
  - If the number is smaller than `first` but bigger than `second`, we update only `second`.
- This ensures we find the second highest value in a **single pass** ($O(n)$ time).

## 🔄 Other Short Ways

### 1️⃣ Using Sort and Set (Modern JS)

<details> <summary>View code</summary>

```js
function secondLargest(arr) {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueSorted.length >= 2 ? uniqueSorted[1] : null;
}
```

### Explanation

- **Set:** Removes duplicate values (like if there are two 20s).
- **Sort:** Orders the numbers from highest to lowest.
- **Index [1]:** Grabs the second item in the sorted unique list.
</details>

</details>
