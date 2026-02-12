# 🟦 Functions in TypeScript

TypeScript functions work like JavaScript functions, but allow you to define types for parameters and return values.  
This helps improve code safety and readability.

---

## 🔹 Basic Function

```ts
function greet(name: string): string {
  return "Hello " + name;
}
```

- `name: string` → Parameter type
- `: string` → Return type.
- Use void when a function does not return any value

## 🔹 Optional & Default Parameters

```ts
function greet(name: string = "Guest", age?: number) {
  console.log(name, age);
}
```

- `name: string = "Guest"` → Default parameter (uses `"Guest"` if no value is passed).
- `age?: number` → Optional parameter (may or may not be provided)

## 🔹 Function Type Alias

```ts
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;
```

- `type AddFunction` → Defines the function structure
- `(a: number, b: number)` → Parameter types
- `=> number` → Return type

## 🔹 Rest Parameters

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

- `...numbers` → Rest parameter (accepts multiple values)
- `number[]` → Ensures all values are numbers
- `: number` → Function returns a number

## 🔹 Function Overloading

Allows defining multiple function types for a single function.

```ts
function format(value: string): string;
function format(value: number): string;

function format(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toString();
}
```

- Multiple function signatures define allowed parameter types
- The last function contains the actual implementation
- Helps provide better type safety and flexibility

---

## ⭐ Why Type Functions?

- Prevent type-related errors
- Improve readability
- Provide better editor support
- Make reusable and safer functions
