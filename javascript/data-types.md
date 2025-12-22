# Data Types

JavaScript data types define **what kind of value** a variable can hold.  
They are divided into two main categories:

- **Primitive Data Types**
- **Non‑Primitive (Reference) Data Types**

---

## 🔹 Primitive Data Types

Primitive data types are **simple and immutable** — their values are compared **by value**, not by reference.

JavaScript has **7 primitive types**:

| No. | Type          | Description                                     | Example                  |
| --- | ------------- | ----------------------------------------------- | ------------------------ |
| 1️⃣  | **String**    | Textual data                                    | `let str = "Hello";`     |
| 2️⃣  | **Number**    | Integers and floating‑point numbers             | `let n = 42;`            |
| 3️⃣  | **BigInt**    | Large integers beyond `Number.MAX_SAFE_INTEGER` | `let big = 123n;`        |
| 4️⃣  | **Boolean**   | Logical values                                  | `let isTrue = false;`    |
| 5️⃣  | **Undefined** | Variable declared but not assigned              | `let x;`                 |
| 6️⃣  | **Null**      | Intentional empty value                         | `let data = null;`       |
| 7️⃣  | **Symbol**    | Unique and immutable identifiers                | `let id = Symbol("id");` |

---

### 🧠 Things to Remember

- Primitives are **immutable**
- Compared **by value**
- `typeof null` → `"object"`
- `typeof NaN` → `"number"`
- BigInt and Number **cannot mix directly**
- Symbols create **unique object keys**
- Shortcut to remember → **SSNNBBU**  
  **S**ymbol, **S**tring, **N**umber, **N**ull, **B**igInt, **B**oolean, **U**ndefined

---

## 🧩 Non‑Primitive (Reference) Data Types

Non‑primitive data types are **objects** in JavaScript.  
They store **references** to memory locations instead of direct values.

When copying or assigning them, you copy the **reference**, not the data — meaning changes affect all references to that object.

---

### 📚 List of Non‑Primitive Data Types

| Type         | Description                             | Example                        |
| ------------ | --------------------------------------- | ------------------------------ |
| **Object**   | Collection of key–value pairs           | `{ name: "Rishabh", age: 22 }` |
| **Array**    | Ordered list of values                  | `[1, 2, 3, 4]`                 |
| **Function** | Block of reusable code                  | `function greet() { ... }`     |
| **Date**     | Represents date and time                | `new Date()`                   |
| **RegExp**   | Pattern matching                        | `/[a-z]+/`                     |
| **Map**      | Stores key–value pairs with unique keys | `new Map()`                    |
| **Set**      | Stores unique values                    | `new Set()`                    |

---
