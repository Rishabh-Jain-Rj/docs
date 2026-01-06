# 📌 map(), filter(), reduce()

These are **array methods** used to work with data in a clean, functional way.  
They **do not mutate** the original array.

---

## map()

- Transforms each element
- Returns a **new array**
- Same length as the original array

**Use when:** you want to **change the data shape**

```js
[1, 2, 3].map((n) => n * 2);
// [2, 4, 6]
```

---

## filter()

- Filters elements based on a condition
- Returns a **new array**
- Length can be smaller than the original

**Use when:** you want to **remove unwanted items**

```js
[1, 2, 3, 4].filter((n) => n % 2 === 0);
// [2, 4]
```

---

## reduce()

- Reduces an array to a **single final value**
- Can return a number, object, array, etc.

**Important points**

- `acc` (**accumulator**) → stores the **result so far**
- `curr` (**current value**) → current array element
- If an **initial value is provided**, `acc` starts with that value
- If **no initial value is provided**, `acc` starts with the **first element of the array**, and iteration begins from the second element

**Use when:** you want to **combine or calculate data**

```js
[1, 2, 3, 4].reduce((acc, curr) => {
  return acc + curr;
}, 0);
// acc starts with custom initial value 0 → final result = 10
```

---

## 🧠 One-line Interview Summary

- `map` → transform
- `filter` → select
- `reduce` → combine
