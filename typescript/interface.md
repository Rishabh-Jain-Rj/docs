# 🟦 TypeScript Interface

An **interface** defines the structure of an object.  
It tells TypeScript what properties an object should have and what their types must be.

---

## 🔹 Basic Example

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Rishabh",
  age: 23,
};
```

> 💡 If any required property is missing or has the wrong type, TypeScript will show an error.

## 🔹 Optional Properties

Use `?` to make a property optional.

```ts
interface User {
  name: string;
  age?: number;
}

const user: User = {
  name: "Rishabh",
};
```

## 🔹 Readonly Properties

Use `readonly` to prevent a property from being modified.

```ts
interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Rishabh",
};

// user.id = 2 ❌ Error
```

⭐ **Why Use Interfaces?**

- Maintain consistent object structure
- Improve code readability
- Prevent type errors
- Commonly used for API data and React props
