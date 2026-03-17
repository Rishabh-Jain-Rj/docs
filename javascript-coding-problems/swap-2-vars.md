# 🔀 Swap Two Numbers

## 📌 Problem Statement

Write a program that swaps the values of two variables, `a` and `b`, **without** using a third (temporary) variable.

### Example

```js
Input: a = 5, b = 6;
Output: a = 6, b = 5;
```

<details> <summary>Click to view solution</summary>

```js
function swapNumbers(a, b) {
  a = a + b; // a becomes 11
  b = a - b; // b becomes 11 - 6 = 5
  a = a - b; // a becomes 11 - 5 = 6

  return `a = ${a}, b = ${b}`;
}

console.log(swapNumbers(5, 6));
// Output: a = 6, b = 5
```

### Explanation

- First, add both numbers together and store the sum in `a`.
- Next, subtract the original `b` from that new sum. This leaves you with the original value of `a`, which gets stored into `b`.
- Finally, subtract the new `b` from the sum to get the original value of `b`, and store it in `a`.

## 🔄 Other Short Ways

### 1️⃣ Using Array Destructuring (Modern JS)

<details> <summary>View code</summary>

```js
function swapNumbers(a, b) {
  [a, b] = [b, a];
  return `a = ${a}, b = ${b}`;
}
```
### Explanation
- This is the cleanest approach in modern JavaScript. It creates a temporary array `[b, a]` and immediately unpacks those values back into `[a, b]`, swapping them in a single line.
</details>



</details>
</details>