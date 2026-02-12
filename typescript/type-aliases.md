# 🟦 Type Aliases

A **Type Alias** allows you to create custom types that make your code easier to read and reuse.

---

### 🔹 Basic Object Example

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Rishabh",
  age: 23,
};
```

---

### 🔹 Primitive Type Alias

```ts
type Username = string;

let name: Username = "Rishabh";
```

---

### 🔹 Union Type

```ts
type Status = "loading" | "success" | "error";

let apiStatus: Status = "loading";
```

---

### 🔹 Function Type

```ts
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;
```

---

### 🔹 Intersection Type

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};
```

> ⚠️ **Note:** Unlike interfaces, Type Aliases do **not** support declaration merging.  
> If you declare the same type alias multiple times, TypeScript will throw an error.

```ts
type User = {
  name: string;
};

type User = {
  age: number;
}; // ❌ Error: Duplicate identifier 'User'
```
