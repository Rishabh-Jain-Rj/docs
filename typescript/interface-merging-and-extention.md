# 🟦 Interface Merging and Extension

TypeScript provides two powerful ways to expand interfaces: **Merging** and **Extension**.

---

## 🔹 Interface Merging

TypeScript allows declaring the same interface multiple times.  
All declarations are automatically merged into a single interface.

#### Example

```ts
interface User {
  name: string;
  age: number;
}

interface User {
  isAdmin: boolean;
}
```

**✅ Final Structure**

```ts
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
```

## 🔹 Interface Extension

Interfaces can extend other interfaces to reuse existing properties and add additional properties when needed.

#### Example

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```

**✅ Usage**

```ts
const emp: Employee = {
  name: "Rishabh",
  salary: 50000,
};
```

> 💡 Extension helps create reusable and scalable type structures.
