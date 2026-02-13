# 🟨 JavaScript Output Based Questions

A collection of **common tricky JavaScript questions** that test your understanding of **hoisting, scope, type coercion, and reference concepts**.

---

## Question 1

```
var x = 20;

const foo = () => {
console.log(x);
var x = 10;
};

foo();
```

<details> <summary> Show Answer</summary>

```
undefined
```

**Explanation:**

- `var x` is **hoisted** inside the function but only the **declaration** (not the value).
- It’s initialized as `undefined`, so `console.log(x)` logs `undefined`.
- The **global `x = 20`** is not accessed because function scope takes priority.

</details>

## Question 2

```
console.log("5" + 4);
console.log("5" - 4);
```

<details> <summary> Show Answer</summary>

```
54
1
```

**Explanation:**

- `"5" + 4` → String concatenation (results in `"54"`).
- `"5" - 4` → The subtraction operator converts `"5"` to a number → `5 - 4 = 1`.

</details>

## Question 3

```
console.log(typeof NaN);
```

<details> <summary> Show Answer</summary>

```
number
```

**Explanation:**

`NaN` means _Not‑a‑Number_, but by JavaScript’s design, its type is still `"number"`.

</details>

## Question 4

```
console.log(NaN === NaN);
```

<details> <summary> Show Answer</summary>

```
false
```

**Explanation:**

- Each `NaN` is a unique invalid number value.
- In JavaScript, `NaN` is **not equal** to anything, including itself.
- Use `Number.isNaN(value)` to properly check for NaN.

</details>

## Question 5

```
console.log(a);
console.log(b);
var a = b = 5;
```

<details> <summary> Show Answer</summary>

```
undefined
ReferenceError: b is not defined (in strict mode)
```

**Explanation:**

- Only `a` is declared with `var`, so it’s **hoisted** and initialized as `undefined`.
- `b = 5` creates an **implicit global** (undeclared variable).
- In **strict mode**, accessing it before declaration causes a ReferenceError.

</details>

## Question 6

```
console.log([] == ![]);
```

<details> <summary> Show Answer</summary>

```
true
```

**Explanation:**

- `[]` is an object, and all objects in JavaScript are **truthy**.
- `![]` converts the truthy value to `false`.
- The comparison becomes `[] == false`.
- With `==`, JavaScript performs **type coercion**.
- `false` is converted to the number `0`.
- `[]` is converted to an empty string `""`.
- The empty string `""` is converted to the number `0`.
- Finally, `0 == 0` evaluates to `true`.

</details>

## Question 7

```
console.log(null + null);
```

<details> <summary> Show Answer</summary>

```
0
```

**Explanation:**

- `null` is converted to `0` in numeric operations
- `0 + 0 = 0`

</details>

## Question 8

```
console.log(parseInt("10px"));
```

<details> <summary> Show Answer</summary>

```
10
```

**Explanation:**

- `parseInt` reads numbers from the **start of the string**
- Stops parsing when it encounters a non-numeric character

> if No numeric value at the start of the string, Parsing fails → returns `NaN`

</details>

## Question 9

```
const fun = () => {
  try {
    return 1;
  } finally {
    return 3;
  }
};

console.log(fun());
```

<details> <summary> Show Answer</summary>

```
3
```

**Explanation:**

- `finally` always executes — even if `try` has a `return`.
- If `finally` contains a **return**, it overrides any other `return`.

</details>

## Question 10

```js
const arr = [1, 2, 4];
arr[10] = 9;

console.log(arr.map(parseInt));
```

<details> <summary> Show Answer</summary>

```
[
  1,
  NaN,
  NaN,
  <7 empty slots>,
  9
]
```

**Explanation:**

- Assigning a value at a higher index (`arr[10] = 9`) creates a **sparse array** with empty slots in between.
- `map` iterates only over existing elements and **skips empty slots**.
- `map` passes multiple arguments to its callback, including the **index**.
- `parseInt` interprets its second argument as the **radix** (number base), which number system the given value is written in.
- Using `map(parseInt)` causes the array index to be treated as the radix.
- Invalid radix values result in `NaN`, producing unexpected output.

**Note (Radix / Number System):**

- **Binary** → base 2 (uses digits 0 and 1) e.g. `parseInt(101, 2)` → `5`
- **Octal** → base 8 (uses digits 0 to 7) e.g. `parseInt(10, 8)` → `8`
- **Decimal** → base 10 (uses digits 0 to 9) e.g. `parseInt(10, 10)` → `10`
- **Hexadecimal** → base 16 (uses digits 0 to 9 and A to F) e.g. `parseInt("A", 16)` → `10`

**Best Practice:**

- Always be explicit about the radix when converting strings to numbers.
- Avoid passing `parseInt` directly as a callback to `map`.

</details>

## Question 11

```
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

```

<details> <summary> Show Answer</summary>

```
456
```

**Explanation:**

- Object keys in JavaScript are always **strings** (or symbols).
- When an object is used as a key, it is **implicitly converted to a string**.
- Both objects (`b` and `c`) are converted to the same string value: `[object Object]`.
- Assigning `a[b]` and `a[c]` therefore refers to the **same property**.
- The second assignment **overwrites** the first one.
- The final value stored for that key is `456`, so accessing `a[b]` returns `456`.

</details>

## Question 12

```js
foo();

function foo() {
  console.log(1);
}

var foo = function () {
  console.log(2);
};
```

<details>
<summary>Show Answer</summary>

```
1
```

**Explanation:**

- Both a function declaration and a `var` variable share the same name (`foo`).
- Function declarations are **fully hoisted** and take **priority** during hoisting.
- `var` is hoisted only as `undefined`, and its assignment happens later.
- At the time `foo()` is called, `foo` still refers to the **function declaration**.
- The `var` assignment overrides `foo` only after that line is executed.

</details>

## Question 13

```js
const obj = {
  x: 10,
  getX() {
    return () => this.x;
  },
};

const fn = obj.getX();
console.log(fn.call({ x: 20 }));
```

<details>
<summary>Show Answer</summary>

```
10
```

**Explanation:**

- `getX` is invoked as a method of `obj`, so `this` refers to `obj`.
- Arrow functions do not have their own `this`.
- The arrow function lexically captures `this` at creation time.
- The captured `this` permanently points to `obj`.
- Methods like `call`, `apply`, or `bind` cannot change `this` for arrow functions.
- Therefore, the function always returns `obj.x`, which is `10`.

</details>

## Question 14

```js
const arr = [1, 2, 3, 4, 5];

arr.length = 2;
console.log(arr);

arr.length = 5;
console.log(arr);
```

<details>
<summary>Show Answer</summary>

```
[1, 2]
[1, 2, <3 empty items>]
```

**Explanation:**

- `arr` starts with 5 values.
- Changing `length` can remove values.
- Removed values are gone permanently.
- Increasing `length` adds empty slots.
- Old values do not come back.

</details>

## Question 15

```js
console.log(1 + -"1" + "2");
```

<details>
<summary>Show Answer</summary>

```
"02"
```

**Explanation:**

- `-"1"` converts the string `"1"` into number `-1`.
- `1 + (-1)` becomes `0`.
- `0 + "2"` results in string concatenation.
- When a number is added to a string using `+`, JavaScript converts the number into a string.

Final result becomes `"02"`.

</details>

## Question 16

```js
console.log("A" - "B" + 2);
```

<details>
<summary>Show Answer</summary>

```
NaN
```

**Explanation:**

- `"A" - "B"` forces numeric conversion, but both values cannot be converted into numbers.
- So JavaScript converts them into `NaN`.
- `NaN + 2` still results in `NaN`.

Final result becomes `NaN`.

</details>

## Question 17

```js
console.log("A" - "B" + "2");
```

<details>
<summary>Show Answer</summary>

```
"NaN2"
```

**Explanation:**

- `"A" - "B"` forces numeric conversion, but both values cannot be converted into numbers.
- So JavaScript converts them into `NaN`.
- `NaN + "2"` results in string concatenation.
- When a number is added to a string using `+`, JavaScript converts the number into a string.

Final result becomes `"NaN2"`.

</details>

## Question 18

```js
console.log([1, 3, 5] + [2, 4, 5]);
```

<details>
<summary>Show Answer</summary>

```
"1,3,52,4,5"
```

**Explanation:**

- When arrays are used with `+`, JavaScript converts them into strings.
- `[1,3,5]` becomes `"1,3,5"`.
- `[2,4,5]` becomes `"2,4,5"`.
- Adding two strings results in concatenation.

Final result becomes `"1,3,52,4,5"`.

</details>

## 💡 One‑Liner Summary

> Most JavaScript “tricks” come from **hoisting**, **type coercion**, and **reference behavior** — master these, and no question will surprise you again 🚀
