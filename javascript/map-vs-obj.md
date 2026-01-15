# 🟨 Map vs Object in JavaScript

Both **Map** and **Object** store data as **key–value pairs**, but they are designed for **different use cases**.

---

## Object

An **Object** is used to represent **structured data**.

- Keys are **strings or symbols**
- Best for **fixed-shape data** (user, config, model)
- No built-in size property
- Iteration requires helper methods

Use Object when **data structure matters more than operations**.

```js
const user = {
  name: "Rishabh",
  age: 24,
};

console.log(user.name); // Rishabh
```

---

## Map

A **Map** is designed for **efficient key–value storage and operations**.

> You can think of Map as array-like in behavior, but key-based in access.

- Keys can be **any data type**
- Maintains **insertion order**
- Built-in `size`
- Direct iteration support
- Provides **built-in methods** for common operations:
  - `set(key, value)` → add/update entry
  - `get(key)` → read value
  - `has(key)` → check existence
  - `delete(key)` → remove entry
  - `clear()` → remove all entries
  - `size` → get total count

Use Map when **frequent add/remove/lookups are required**.

```js
const userMap = new Map();

const fn = () => {
  console.log("hi");
};

// setting values
userMap.set("name", "Rishabh");
userMap.set("age", 24);
userMap.set(fn, "rishabh"); // function used as key

// reading values
console.log(userMap.get("name")); // Rishabh
console.log(userMap.get(fn)); // rishabh
```

> When using `objects` or `functions` as **Map keys**, always reuse the same **reference** to read the value.

---

## Key Differences

| Feature   | Object          | Map                  |
| --------- | --------------- | -------------------- |
| Purpose   | Structured data | Key–value collection |
| Key Types | String / Symbol | Any                  |
| Order     | Not important   | Preserved            |
| Size      | Manual          | Built-in             |
| Iteration | Indirect        | Direct               |

---

## Summary

- **Object** is for modeling data, **Map** is for managing key–value collections.
- Objects are JSON-friendly; Maps are not directly serializable
- Objects can face key-collision issues; Maps are safer
- Maps are optimized for frequent data operations
