# ⚛️ Forward Ref

## What is Forward Ref?

`forwardRef` is a React API that allows a **parent component to pass a ref to a child component**.

By default, refs **do not work with custom functional components**. `forwardRef` solves this problem.

> `forwardRef` is a React API because it changes how a component behaves externally, while hooks are used to manage logic and state inside the component.

---

### Why forwardRef Is Needed

- Refs normally work only with **DOM elements**.
- When you create a **custom component**, the ref stops at that component.
- Sometimes the parent needs direct access to a **child DOM element**
  (for focus, scroll, animations, etc.).

`forwardRef` allows the ref to be **forwarded to the actual DOM element** inside the child.

---

### Example Without forwardRef (❌ Won’t Work)

```js
function Input(props) {
  return <input />;
}

const inputRef = useRef(null);
<Input ref={inputRef} />; // ref will be null
```

### Example With forwardRef (✅ Works)

```js
import React, { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

function App() {
  const inputRef = useRef(null);

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  );
}
```

## When to Use forwardRef

- Focusing an input from a parent component
- Scrolling to a specific element
- Integrating with third-party libraries
- Animations and other imperative DOM access

---

## Important Notes

- `forwardRef` should be used **only when necessary**
- Overusing refs can make code harder to understand because it directly changes the DOM instead of letting React control the UI through state.
