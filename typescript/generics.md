# 🟦 Generics

Generics allow you to create reusable and flexible types while maintaining type safety.  
They help functions, components, and utilities work with multiple types without losing type information.

---

### 🔹 Basic Example

```ts
function identity<T>(value: T): T {
  return value;
}
```

**🔹 Usage**

```ts
identity<string>("Hello");
identity<number>(10);
```

- `<T>` → Generic type placeholder
- `T` → Represents the type passed during usage
- Helps keep return type consistent with input type
- `T` is just a naming convention and can be replaced with any meaningful name

---

## ⭐ Why Use Generics?

- Create reusable and flexible code
- Maintain type safety
- Preserve type information
- Safer alternative to `any`
