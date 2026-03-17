# 🔤 Count Vowels and Consonants

## 📌 Problem Statement

Write a function that counts and prints the number of **vowels** and **consonants** in a given string. 
>*(Note: Spaces and special characters should be ignored, counting only alphabetical characters).*

### Example

```js
Input: "Hello World";
Output: 3 Vowels & 7 Consonants;
```

<details> <summary>Click to view solution</summary>

```js
function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  const vowelList = "aeiou";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/[a-zA-Z]/.test(char)) {
      if (vowelList.includes(char.toLowerCase())) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return `${vowels} Vowels & ${consonants} Consonants`;
}

console.log(countVowelsAndConsonants("Hello World"));
// Output: 3 Vowels & 7 Consonants
```

### Explanation

- Create counters for both vowels and consonants starting at `0`.
- Iterate through each character of the string.
- Use a regular expression `/[a-zA-Z]/` to ensure we only process letters, ignoring spaces, numbers, and symbols.
- Check if the current character exists in a predefined string of vowels (`"aeiou"`).
- Increment the respective counter and return the final formatted string.

</details>