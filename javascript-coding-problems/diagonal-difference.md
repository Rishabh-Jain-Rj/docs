# 🔷 Diagonal Difference

## 📌 Problem Statement

Given a square matrix, find the absolute difference between the sums of its two diagonals.

- **Primary diagonal** → from top-left to bottom-right
- **Secondary diagonal** → from top-right to bottom-left

### Example

**Input:**

```javascript
[
  [3, 1, 7],
  [2, 5, 4],
  [9, 6, 8],
];
```

**Output:** `5`

### 📝 How it is calculated

- **Primary diagonal** → `3 + 5 + 8 = 16`
- **Secondary diagonal** → `7 + 5 + 9 = 21`
- **Difference** → `|16 - 21| = 5`

<details>
<summary><strong>Click to view solution</strong></summary>

```javascript
function diagonalDifference(arr) {
  let primary = 0;
  let secondary = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    primary += arr[i][i];
    secondary += arr[i][n - 1 - i];
  }

  return Math.abs(primary - secondary);
}

console.log(
  diagonalDifference([
    [3, 1, 7],
    [2, 5, 4],
    [9, 6, 8],
  ]),
);
// Output: 5
```

### 💡 Explanation

Instead of using two nested loops, we can solve this efficiently in a single loop by using the row index `i`.

**1. Primary Diagonal (`arr[i][i]`)**
The primary diagonal always has matching row and column indexes:

- Row 0: `[0][0]` (value: 3)
- Row 1: `[1][1]` (value: 5)
- Row 2: `[2][2]` (value: 8)

**2. Secondary Diagonal (`arr[i][n - 1 - i]`)**
The secondary diagonal moves backward across the columns as it moves down the rows. If `n = 3` (the length of the array):

- Row 0: `[0][3 - 1 - 0]` → `[0][2]` (value: 7)
- Row 1: `[1][3 - 1 - 1]` → `[1][1]` (value: 5)
- Row 2: `[2][3 - 1 - 2]` → `[2][0]` (value: 9)

**3. The Result**
Finally, we use `Math.abs(primary - secondary)` to ensure the final difference is always a positive number (absolute value).

</details>
