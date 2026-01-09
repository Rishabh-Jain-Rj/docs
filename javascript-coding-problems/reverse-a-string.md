# 🔁 Reverse a String

## 📌 Problem Statement

Write a function that takes a **string** as input and returns the **reversed version** of that string.

### Example

```js
Input: "hello";
Output: "olleh";
```

<details> <summary>Click to view solution</summary>

```js
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("Rishabh"));
```

### Explanation

- Start iterating from the last character of the string
- Append each character to a new string
- Continue the process until the first character is reached

## 🔄 Other Short Ways

### 1️⃣ Using Built-in Methods

<details> <summary>View code</summary>

```js
function reverseString(str) {
  return str.split("").reverse().join(""); // or [...str].reverse().join("");
}
```

</details>

### 2️⃣ Using reduce()

<details> <summary>View code</summary>

```js
function reverseString(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
```

</details>

### 3️⃣ Using Recursion

<details> <summary>View code</summary>

```js
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}
```

</details>
</details>
