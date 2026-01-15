# 🟨 Operator Precedence in JavaScript

JavaScript evaluates expressions based on **operator precedence** (similar to BODMAS), along with **associativity**.

---

## What is Operator Precedence?

> **Operator precedence defines which operator is evaluated first in an expression.**

Higher-precedence operators run before lower-precedence ones.

---

## Common Precedence Order (High → Low)

1. Parentheses `()`
2. Unary operators (`+x`, `-x`, `!x`)
3. Multiplication / Division / Modulus `* / %`
4. Addition / Subtraction `+ -`
5. Comparison `< > <= >=`
6. Equality `== ===`
7. Logical AND `&&`
8. Logical OR `||`
9. Assignment `=`

---

## Associativity (Important)

When operators have the **same precedence**:

- Most operators → **left to right**
- Assignment (`=`) → **right to left**

---

## Tricky Example

```js
true || (false && false + 1 * 2 === 2);
```

<details> <summary>Show Output</summary>

```
true
```

#### Step-by-step Explanation

**1. Multiplication first**

```
1 * 2 → 2
```

**2. Addition**

```
false + 2 → 2
```

_(Because `false` is converted to `0` in numeric context)_

**3. Equality**

```
2 === 2 → true
```

**4. Logical AND**

```
false && true → false
```

**5. Logical OR**

```
true || false → true
```

</details>
