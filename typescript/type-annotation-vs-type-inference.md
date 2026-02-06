# 🟦 Type Annotation vs Type Inference

TypeScript understands variable types in two ways: **Type Annotation** and **Type Inference**.

---

### 🔹 Type Annotation

When you manually define the type of a variable.

```ts
let username: string = "Rishabh";
let age: number = 23;
```

✅ Useful when:

- Variable starts empty
- Working with functions
- Defining objects or complex data

---

### 🔹 Type Inference

When TypeScript automatically detects the type from the assigned value.

```ts
let username = "Rishabh"; // inferred as string
let age = 23; // inferred as number
```

---

### Best Practice

> Use **Type Inference** when TypeScript can understand the type automatically.

> Use **Type Annotation** when TypeScript cannot determine the type clearly.

```ts
let city: string; // Annotation needed
city = "Delhi";
```
