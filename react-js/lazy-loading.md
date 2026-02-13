# ⚛️ Lazy Loading in React

## 📘 What is Lazy Loading?

Lazy loading is a technique where components are loaded _only when they are needed_, instead of loading everything at the initial render.

This improves:

- Page speed
- Bundle size
- Application performance

---

## 🚀 Why Use Lazy Loading?

- Loads the app faster on first visit
- Doesn’t download everything at once
- Only loads heavy components when actually needed
- Keeps the main bundle small
- Browser has less JavaScript to parse at the start
- Extra files are downloaded only when the user opens that part

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

## 🔄 Application Flow

#### ❌ Without Lazy Loading

```
User Opens Website
        ↓
Browser Requests Server
        ↓
Server Sends Full JS Bundle
(All Components Included)
        ↓
Browser Downloads Entire Bundle
        ↓
React Renders UI
        ↓
User Navigates Between Pages
(No Additional Downloads)
```

👉 Problem:

- Large initial load time
- Unnecessary components loaded

#### ✅ With Lazy Loading

```
User Opens Website
        ↓
Browser Requests Server
        ↓
Server Sends Core Bundle Only
        ↓
React Starts Rendering
        ↓
User Navigates To Lazy Component
        ↓
Dynamic Import Triggered
        ↓
Browser Downloads Component Chunk
        ↓
Suspense Shows Loader
        ↓
Component Loads & Renders
```

**Internal Working**

- `Lazy Import` → Creates Separate Chunk
- `Navigation` → Triggers Network Request
- `Chunk Loaded` → React Renders Component

---
