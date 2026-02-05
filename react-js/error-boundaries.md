# ⚛️ Error Boundaries

## 📌 What is Error Boundary?

Error Boundaries are special React class components that catch errors inside their child components and display a fallback UI instead of letting the entire application crash.

## 🎯 Why Use It?

- Prevent full app crash
- Show fallback UI
- Log errors for debugging
- Improve user experience

---

## ⚙️ Lifecycle Methods Used

### 1. `static getDerivedStateFromError(error)`

- Runs when error occurs
- Updates state to render fallback UI
- No side effects allowed

### 2. `componentDidCatch(error, errorInfo)`

- Runs after fallback UI renders
- Used for logging errors

---

## 🚀 Execution Flow

```
Child component throws an error
        ↓
React finds nearest Error Boundary
        ↓
getDerivedStateFromError() runs
(Updates state for fallback UI)
        ↓
Fallback JSX renders
        ↓
componentDidCatch() runs
(Handles side effects like logging)
```

## 🧩 Basic Implementation

### ⭐ Error Child Component

```jsx
const ErrorComponent = () => {
  throw new Error("Component Crashed!");
  return <>Error Component</>;
};
```

### ⭐ Error Boundary Component

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### 🚀 Usage

```js
<ErrorBoundary>
  <ErrorComponent />
</ErrorBoundary>
```
