# 🟨 JavaScript: WeakSet & WeakMap

A minimal, quick-reference guide to understanding and using `WeakSet` and `WeakMap` for memory-safe data handling.

---

## 🧠 `WeakSet`

A collection of **unique objects**, stored with weak references.

**Key Features:**

- 📦 **Objects Only:** You can only store objects, not primitive values.
- ♻️ **Garbage Collection (GC) Safe:** Objects are automatically removed from memory when no longer referenced elsewhere.
- ❌ **Not Iterable:** You cannot loop over a `WeakSet`.

### 💻 Example

```javascript
let obj = { id: 1 };

const weakSet = new WeakSet();
weakSet.add(obj);

console.log(weakSet.has(obj)); // true

obj = null;
// The object is now eligible for garbage collection.
```

---

## 🧠 `WeakMap`

A collection of key-value pairs where the keys are held using **weak references**.

**Key Features:**

- 🔑 **Objects Only:** Keys _must_ be objects (or Symbols), not primitive values like strings or numbers.
- ♻️ **Garbage Collection (GC) Safe:** If there are no other references to a key object, it is automatically removed from memory.
- ❌ **Not Iterable:** You cannot loop over a `WeakMap` (no `for...of`, `forEach`, or `.size`).

### 💻 Example

```javascript
let obj = { name: "Rishabh" };

const weakMap = new WeakMap();
weakMap.set(obj, "data");

console.log(weakMap.get(obj)); // "data"

obj = null;
// The object is now eligible for garbage collection.
// The entry in the WeakMap will automatically disappear.
```

---

## ⚔️ `WeakSet` vs `WeakMap`

| Feature               | `WeakSet`    | `WeakMap`               |
| :-------------------- | :----------- | :---------------------- |
| **Stores**            | Objects only | Key-value pairs         |
| **Key Type / Values** | Objects only | Objects only (for keys) |
| **Iterable**          | ❌ No        | ❌ No                   |
| **Garbage GC Safe**   | ✅ Yes       | ✅ Yes                  |

---

## ⚠️ Important Limitations

Because they rely on the browser's garbage collector, which runs unpredictably, both structures share these constraints:

- ❌ No iteration methods (`forEach`, `keys()`, `values()`).
- ❌ No `.size` property.
- ❌ Cannot inspect all stored keys/values at once.
- ✅ **Best for:** Internal, hidden, or temporary data handling.

---
