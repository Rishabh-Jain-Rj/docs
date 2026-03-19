# 🪜 Right-Aligned Staircase

## 📌 Problem Statement

Write a program to print a right-aligned staircase of size `n`.

The staircase should use:

- `#` for steps
- spaces for alignment
- The last line should have no leading spaces

### Example

**Input:** `5`

**Output:**

```text
    #
   ##
  ###
 ####
#####
```

<details>
<summary><strong>Click to view solution</strong></summary>

```javascript
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}

staircase(5);
```

### 💡 Explanation

- Loop from `1` → `n` using index `i`.
- For each row:
  - Create the required spaces using `" ".repeat(n - i)`
  - Create the required hashes using `"#".repeat(i)`
- Print them joined together.

---

### 🔄 Alternative Way: Using `padStart()`

<details>
<summary><strong>Click to view solution</strong></summary>

You can achieve the same result in fewer lines using JavaScript's built-in string padding method.

```javascript
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n, " "));
  }
}
```

**Explanation:**

- First, create the `#` characters using `repeat(i)`.
- Then, use `.padStart(n, " ")` to add spaces at the beginning of the string until the total length reaches `n`.
- This automatically handles the math and makes the text right-aligned!
</details>

</details>
