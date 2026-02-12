# 🟦 TypeScript Basic Types

TypeScript basic types define what kind of value a variable can store.  
They help prevent errors and make code easier to understand.

---

### 🔹 String

Used to store text values.

```ts
let username: string = "Rishabh";
```

### 🔹 Number

Used for numeric values.

```ts
let age: number = 23;
let price: number = 199.99;
```

### 🔹 Boolean

Used for true or false values.

```ts
let isLoggedIn: boolean = true;
```

### 🔹 Array

Used to store multiple values of the same type.

```ts
let skills: string[] = ["React", "TypeScript", "JavaScript"];
```

### 🔹 Tuple

Used to store fixed number of values with specific types.

```ts
let user: [string, number] = ["Rishabh", 23];
```

### 🔹 Enum

Used to define a set of constant values.

```ts
enum Role {
  Admin,
  User,
  Guest,
}

let userRole: Role = Role.Admin;
```

### 🔹Any ⚠️

Allows any type of value (avoid using when possible).

```ts
let data: any = "Hello";
data = 25;
```

### 🔹Unknown

Similar to any but safer. Requires type checking before usage.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe to use as string
}
```

> 💡 `unknown` forces you to check the type before using the value, which helps prevent runtime errors.

### 🔹 Void

Used when a function does not return any value.

```ts
function logMessage(): void {
  console.log("Hello");
}
```

### 🔹 Never

Used when a function never returns a value.

```ts
function throwError(): never {
  throw new Error("Error occurred");
}
```

### 🔹 null

Represents **intentional empty value**
Means: "Value is empty on purpose"

```ts
let data: null = null;
```

### 🔹 undefined

Represents value not assigned yet

```ts
let username: undefined = undefined;
```
