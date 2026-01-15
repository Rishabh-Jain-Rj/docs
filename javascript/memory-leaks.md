# 🟨 Memory Leaks in JavaScript

JavaScript uses two main memory areas: **Stack** and **Heap**.

### Stack Memory

- Stores **primitive values** and function call information
- Memory is **allocated and released automatically**
- Cleared as soon as a function finishes execution

### Heap Memory

- Stores **objects, arrays, and functions**
- Memory is managed by the **Garbage Collector**
- Data stays in memory as long as it is **referenced**

### Why Memory Leaks Happen

Memory leaks occur when **heap memory** is still referenced even though it is no longer needed.  
The Garbage Collector cannot free memory if references are kept alive.

This leads to **performance issues**, slow UI, and potential crashes in long-running applications.

### Common reasons

- Unreleased references
- Objects kept alive longer than needed
- Missing cleanup logic

### Prevention

Always clean up resources and remove references when they are no longer required.

## 🧠 Memory Leak Examples

### 1. React Event Listener

If an event listener is added in `useEffect` and **not removed**, it remains active even after the component unmounts.

```js
useEffect(() => {
  const handleResize = () => {
    console.log("window resized");
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  }; // cleanup funtion needed
}, []);
```

#### Explanation

- Event listener is added when the component mounts
- Cleanup function runs when the component unmounts
- Listener is removed, allowing garbage collection

## 🔍 More Memory Leak Examples

- Timers (`setInterval`, `setTimeout`) not cleared after use
- Event listeners not removed on component unmount
- Subscriptions (WebSocket, observers) left open
- Global variables holding large data
- Closures keeping references to unused objects
- Detached DOM elements still referenced in JavaScript
- Cached data that is never released
- Third-party libraries not properly destroyed
- Repeated listeners added on re-render without cleanup
- Long-lived promises that are never cancelled
