# ⚛️ React Virtualization

## 🧠 What is List Virtualization?

Virtualization is a **performance technique** for rendering long lists or tables.

It only renders the specific items that are currently visible on your screen (the viewport), swapping out old data for new data as you scroll instead of creating thousands of DOM elements.

---

## ❓ What Problem Does it Solve?

Without Virtualization:

- Renders thousands of DOM nodes at once
- High memory consumption
- Browser freezes and laggy scrolling

With Virtualization:

- Renders only the visible nodes (e.g., ~10 at a time)
- Clean, minimal DOM
- Buttery smooth performance

---

## 🧰 The Go-To Library: react-virtuoso

`react-virtuoso` is a modern powerhouse for virtualized lists in React. It perfectly handles dynamic heights and auto-sizing without you needing to do any manual math.

---

## 💻 Code Example

First, install the package:
`npm install react-virtuoso`

Then, use it in your component:

```jsx
import { Virtuoso } from "react-virtuoso";

const fruits = Array.from({ length: 50 }, (_, i) => `Fruit ${i}`);

export default function VirtualList() {
  return (
    <Virtuoso
      style={{ height: 100 }}
      data={fruits}
      itemContent={(index, item) => (
        <div>
          {index} - {item}
        </div>
      )}
    />
  );
}
```
