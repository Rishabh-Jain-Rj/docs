# ➗ Find All Factors of a Number

## 📌 Problem Statement

Write a function that accepts a **positive integer** and returns an array containing all of its **factors**. 

**What is a factor?** 🤔
It is any whole number that divides into your target number perfectly, leaving **zero remainder**.

### Example

```js
Input: 14;
Output: [1, 2, 7, 14];

Input: 35;
Output: [1, 5, 7, 35];
```

<details> <summary>Click to view solution</summary>

```js
const getFactors = (num) => {
  const factors = [];

  // Optimization: A number cannot have factors larger than half of its value
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  
  // Add the number itself as the final factor
  factors.push(num);

  return factors;
}

console.log(getFactors(14));
// Output: [1, 2, 7, 14]
```

### Explanation

- Initialize an empty array `factors` to store the results.
- Loop through numbers starting from `1`, but only go up to `num / 2`. This is a great optimization because no number has a factor larger than half of itself (except the number itself).
- Use the modulo operator (`%`) to check if the division leaves a remainder of `0`.
- If it evenly divides, push that number into the `factors` array.
- Finally, push the original `num` into the array and return the result.

</details>