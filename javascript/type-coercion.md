# 🟨 Type Coercion

Type coercion is when **JavaScript automatically changes a value’s type** so an operation can be performed.

---

## When Type Coercion Happens

- While using operators like `+`, `-`, `==`, `!`
- During comparisons
- In boolean conditions

---

## Common Coercion Rules

| Operator / Context     | What JavaScript does                                                  |
| ---------------------- | --------------------------------------------------------------------- |
| `if (value)`, `!value` | Converts value to **boolean**                                         |
| Unary `+value`         | Converts value to **number**                                          |
| `value1 + value2`      | If any value becomes a **string**, joins text; otherwise adds numbers |
| `-`, `*`, `/`          | Converts values to **numbers**                                        |
| `==`                   | Converts values as needed to **compare them**                         |
| `===`                  | **No conversion**, compares type + value                              |

> Type coercion depends on the operator and context, not on the value itself.

> **Note:** With the **binary `+` operator**, objects are first converted to primitives, and for arrays this conversion prefers strings rather than numbers.

---

## Questions

### Question 1

```
[] + []
```

<details>
<summary>Show Output</summary>

```
""
```

**🧩 Explanation**

- `+` is the **binary plus operator**.
- Binary `+` prefers **string concatenation** when operands aren’t pure numbers.
- Arrays are first converted to **empty strings (`""`)**, so `[] + []` results in `""`.

</details>

### Question 2

```
[] + {}
```

<details>
<summary>Show Output</summary>

```
"[object Object]"
```

**🧩 Explanation**

- `+` is again the **binary plus operator**.
- `[]` converts to an empty string.
- `{}` converts to `"[object Object]"`.
- JavaScript concatenates them as strings.

</details>

</details>

### Question 3

```
+{}
```

<details>
<summary>Show Output</summary>

```
NaN
```

**🧩 Explanation**

- Unary `+` forces number conversion
- `{}` cannot become a number
- Result is `NaN`

</details>

### Question 4

```
null == undefined
```

<details>
<summary>Show Output</summary>

```
true
```

**🧩 Explanation**

- JavaScript has a **special case** for `null` and `undefined`
- They are considered equal **only to each other**
- They are **not** equal to any other value

</details>
