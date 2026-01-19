# ⚛️ What Are Hooks?

Hooks are **functions provided by React** that let you use **state, lifecycle features,
and other React features inside functional components**.

Before hooks, these features were available only in **class components**.

### Example

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Important Rules of Hooks

- Hooks must be called **at the top level** of a component.
- Hooks must be called **only inside React function components or custom hooks**.
- Do **not** call hooks inside:
  - loops
  - conditions
  - nested functions

## Why Hooks Are Needed

- Functional components are **easy to write and understand**, but earlier they
  could not use state or lifecycle features.
- Class components already had these features, but:
  - the syntax was more complex
  - logic was harder to reuse
  - `this` keyword often caused confusion
- Hooks were introduced to **bring state and lifecycle features to functional components**.
- This allows developers to:
  - write **simple functional components**
  - use state and side effects without classes
  - reuse logic in a clean and readable way

---

## What Hooks Allow You to Do

- Use **state** in functional components (`useState`)
- Handle **side effects** like API calls (`useEffect`)
- Share reusable logic between components (custom hooks)
- Access context, refs, memoization, and more

---
