# 📌 Shallow Copy vs Deep Copy

## Shallow Copy

- Copies only **top-level values**
- Nested objects/arrays are **shared by reference**
- Changes in nested data affect both copies
- Shallow copy can be created using the **spread operator** (`{ ...obj }`, `[...arr]`)

```js
const obj = { a: 1, b: { c: 2 } };
const shallow = { ...obj };

shallow.b.c = 10;
console.log(obj.b.c); // 10
```

## Deep Copy

- Copies **all levels** of data
- No shared references
- Changes do **not** affect the original

### Deep Cloning Methods

**`structuredClone()` (Recommended)**

- Built-in JavaScript function
- Creates a true deep copy of nested data
- Preserves data types like `Date`, `Map`, `Set`
- ❌ If unsupported data is found (functions, DOM, symbols), it **throws an error**

```js
const deep = structuredClone(obj);
```

**`JSON.parse(JSON.stringify())` (Limited)**

- Converts object to JSON and back
- Works only for simple, JSON-safe data
- ❌ Loses undefined, functions, Date
- ⚠️ Does **not throw an error** — unsupported values are **silently ignored**

```js
const deep = JSON.parse(JSON.stringify(obj));
```

### Deep Cloning Exmaple

```js
const obj = { a: 1, b: { c: 2 } };
const deep = structuredClone(obj);

deep.b.c = 10;
console.log(obj.b.c); // 2
```

## Quick Memory

> Shallow copy → shared references

> Deep copy → fully independent
