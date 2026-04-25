# 🟨 JavaScript: Set & Map

A minimal, quick-reference guide to understanding and using `Set` and `Map` in JavaScript.

---

## 🧠 `Set`

A collection of **unique** values.

**Key Features:**

- 🚫 **No duplicates:** Automatically removes duplicate values.
- ⏱️ **Ordered:** Maintains insertion order.
- 📦 **Flexible:** Supports any data type (primitives and objects).

### 💻 Example

```javascript
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set(3) {1, 2, 3}

set.add(4);
set.delete(2);
console.log(set.has(3)); // true
```

### 🚀 Common Use Cases

**1. Remove Duplicates from an Array**

```javascript
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)]; // [1, 2, 3]
```

**2. Fast Existence Check**

```javascript
const ids = new Set([101, 102, 103]);
ids.has(102); // true
```

---

## 🧠 `Map`

A collection of **key-value pairs**, similar to objects but designed for better data manipulation.

**Key Features:**

- 🔑 **Any Key Type:** Keys can be objects, functions, or any primitive (objects are limited to string/symbol keys).
- ⏱️ **Ordered:** Maintains insertion order.
- 🔄 **Iterable:** Built-in methods make looping straightforward.

### 💻 Example

```javascript
const map = new Map();
map.set("name", "Rishabh");
map.set(1, "number key");

console.log(map.get("name")); // 'Rishabh'
console.log(map.has(1)); // true

map.delete(1);
```

### 🚀 Common Use Cases

**1. Using Objects as Keys**

```javascript
const user = { id: 1 };
const roles = new Map();

roles.set(user, "Admin");
console.log(roles.get(user)); // 'Admin'
```

**2. Direct Iteration**

```javascript
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
```

---

## ⚔️ `Set` vs `Map`

| Feature        | `Set`             | `Map`                   |
| :------------- | :---------------- | :---------------------- |
| **Stores**     | Unique values     | Key-value pairs         |
| **Duplicates** | ❌ Not allowed    | ✅ Allowed (for values) |
| **Key Type**   | N/A (Values only) | Any data type           |
| **Iterable**   | ✅ Yes            | ✅ Yes                  |

---

## 🎯 TL;DR: When to Use

- **Use `Set`** ➔ When you need a list of **unique values**.
- **Use `Map`** ➔ When you need flexible **key-value** mapping.

> **⚠️ Memory Note:** Both `Set` and `Map` hold "strong references" to their data. They do not auto-remove objects from memory. If you need automatic garbage collection for objects, look into `WeakSet` and `WeakMap`.
