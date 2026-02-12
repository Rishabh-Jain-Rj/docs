# 🟦 TypeScript – Introduction

## 🚀 What is TypeScript?

TypeScript is built on top of JavaScript and adds type checking that helps developers write safer and more understandable code.

```
TypeScript = JavaScript + Type Safety
```

---

## ❓ Why Use TypeScript?

JavaScript is flexible but sometimes allows mistakes that cause runtime errors.  
TypeScript helps catch these errors while writing code.

### Example

#### JavaScript

```js
let age = 25;
age = "twenty five"; // Allowed (can cause bugs)
```

#### Typescript

```js
let age: number = 25;
age = "twenty five"; // ❌ Error
```

---

## ✅ Key Benefits

- Helps prevent common coding mistakes
- Improves code readability and maintainability
- Provides better editor support (auto-complete, hints, error detection)
- Useful for large-scale applications
- Popular with React, Next.js, Angular, and Node.js

## ⚙️ How TypeScript Works

Browsers cannot run TypeScript directly.

TypeScript is converted into JavaScript using the TypeScript compiler.

```
TypeScript (.ts / .tsx)
          ↓
   TypeScript Compiler (tsc)
          ↓
     JavaScript (.js)
          ↓
        Browser
```

## 🛠 TypeScript Common Commands

| Command                             | Purpose                                                          |
| ----------------------------------- | ---------------------------------------------------------------- |
| `npm install typescript --save-dev` | Installs TypeScript in the project                               |
| `tsc --init`                        | Creates `tsconfig.json` configuration file                       |
| `tsc filename.ts`                   | Compiles a specific TypeScript file into JavaScript              |
| `tsc`                               | Compiles the entire project using `tsconfig.json`                |
| `tsc --watch filename.ts`           | Automatically compiles a specific file whenever you save changes |
| `tsc --watch`                       | Automatically compiles the entire project using `tsconfig.json`  |

| `tsc -v` | Shows installed TypeScript version |

## 📂 File Extensions

| Extension | Usage                                                                  |
| --------- | ---------------------------------------------------------------------- |
| `.ts`     | Used for standard TypeScript files (logic, utilities, functions, etc.) |
| `.tsx`    | Used for TypeScript files that include JSX, mainly in React components |
