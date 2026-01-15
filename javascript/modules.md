# 🟨 JavaScript Modules (ES Modules)

JavaScript **modules** help you organize code by splitting it into **multiple files**. Each file has its **own scope** and can share code using `export` and `import`.

---

## Why Use Modules?

- Better code organization
- Reusable logic
- Avoid global scope pollution
- Easy to maintain large applications

---

## Using type="module" attribute in script tag

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS Modules</title>
  </head>
  <body>
    <h2>JavaScript Modules Example</h2>

    <!-- Main entry file loaded as a module -->
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

### main.js

```
import { add } from "./math.js";

console.log("Result:", add(2, 3));

```

### math.js

```
export const add = (a, b) => a + b;
```

## Important notes

> When you import **anything** from a module, the **entire module file is executed**, not just the exported variable or function.
> <br/><br/>
> 👉 This means **if there is any `console.log` or other code inside the module file, it will also run and print**, even if you import only one variable or function.
