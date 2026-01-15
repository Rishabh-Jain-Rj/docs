# 🟨 Object.freeze() vs Object.seal() in JavaScript

Both methods are used to **restrict changes to objects**, but they differ in how much mutation they allow.

---

## Object.freeze()

`Object.freeze()` makes an object **completely immutable**.

- ❌ Cannot add properties
- ❌ Cannot delete properties
- ❌ Cannot modify existing values
- Shallow freeze (nested objects can still change)

**Use case:** Constant or read-only data.

---

## Object.seal()

`Object.seal()` locks the **structure** of an object but allows value updates.

- ❌ Cannot add properties
- ❌ Cannot delete properties
- ✅ Can modify existing values
- Shallow seal (nested objects can still change)

**Use case:** Fixed shape objects with editable values.

---

## Key Differences

| Feature           | freeze          | seal              |
| ----------------- | --------------- | ----------------- |
| Add properties    | ❌              | ❌                |
| Delete properties | ❌              | ❌                |
| Modify values     | ❌              | ✅                |
| Mutability        | Fully immutable | Partially mutable |

---

## Important Notes

- **`freeze` makes an object fully immutable, while `seal` prevents structure changes but allows value updates.**
- **`Object.freeze()` and `Object.seal()` are shallow and affect only top-level properties, not nested objects.**
- Use `Object.isFrozen()` and `Object.isSealed()` to check status
- In strict mode, invalid changes throw errors
