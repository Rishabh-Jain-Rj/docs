# 📌 Lazy Loading in React

## 📘 What is Lazy Loading?

Lazy loading is a technique where components are loaded _only when they are needed_, instead of loading everything at the initial render.

This improves:

- Page speed
- Bundle size
- Application performance

---

## 🚀 Why Use Lazy Loading?

- Faster initial page load
- Reduced JavaScript bundle size
- Better performance for large apps
- Perfect for routing and heavy components

---

## 🧩 Basic Example

```jsx
import React, { Suspense } from "react";

const Profile = React.lazy(() => import("./Profile"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}
```
