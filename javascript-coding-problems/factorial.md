# 🧮 Find Factorial of a Number

## 📌 Problem Statement

Write a function that takes a **non-negative integer `n`** as input and returns the **factorial** of that number.

### Example

```js
Input: 5;
Output: 120; // 5! = 5 × 4 × 3 × 2 × 1 = 120
```

### Constraints

- `n` will be a non-negative integer
- `0!` should return `1`

<details> <summary>Click to view solution</summary>

```js
const findFactorial = (n) => {
  let result = 1;

  for (let i = n; i >= 1; i--) {
    result *= i;
  }

  return result;
};

console.log(findFactorial(5)); // 120
```

### Explanation

- Initialize `result` with `1`
- Start looping from `n` down to `1`
- Multiply `result` by the loop variable on each iteration
- Return the final result

## 🔄 Other Ways to Solve the Same Problem

### 1️⃣ Recursive Approach

<details> <summary>View recursive solution</summary>

```js
const findFactorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * findFactorial(n - 1);
};

console.log(findFactorial(5)); // 120
```

### Explanation

- Base case: factorial of `0` or `1` is `1`
- The function returns `n * findFactorial(n - 1)`
- Each recursive call reduces `n` by `1` until the base case is reached
- The final result is the multiplication of all values from `n` down to `1`

</details>
