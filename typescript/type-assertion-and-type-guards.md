# 🟦 Type Assertion & Type Guards

TypeScript provides **Type Assertion** and **Type Guards** to help safely work with different or unknown types.

---

## 🔹 Type Assertion

Type Assertion tells TypeScript to treat a value as a specific type.  
It does not change runtime behavior — it only affects type checking.

### Example

```ts
let value: unknown = "Hello";

let length = (value as string).length;
```

- `as string` → Tells TypeScript to treat `value` as a string
- Useful when you are sure about the type

**Alternative Syntax**

```ts
let length = (<string>value).length;
```

> 💡 Type Assertion should be used carefully because it bypasses type checking.

---

## 🔹 Type Guards

Type Guards help TypeScript detect and narrow types safely by checking the type before using it.

### Example Using `typeof`

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

- `typeof` checks the type
- Allows safe usage of type-specific methods

---

## 📌 Summary

- **Type Assertion** is used when you already know the type
- **Type Guards** are used to safely check and narrow types
- Both help work effectively with union and `unknown` types
