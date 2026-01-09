# 🔁 Palindrome Check

## 📌 Problem Statement

Write a function that checks whether a given **string** is a **palindrome**.

A palindrome is a word, phrase, or sequence that reads the same **forward and backward**.

### Example

```js
Input: "madam";
Output: true;

Input: "hello";
Output: false;
```

<details> <summary>Click to view solution</summary>

```js
const checkPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
```

### Explanation

- The loop runs only till half of the string length
- Characters are compared from the start and end simultaneously
- Index `i` is compared with `str.length - 1 - i`
- If any character mismatch is found, the function returns `false`
- If the loop completes without mismatch, the string is a palindrome

## 🔄 Other Short Ways using inbuild methods

### 1️⃣ Using Reverse Method

<details> <summary>View code</summary>

```js
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
```

</details>

</details>
