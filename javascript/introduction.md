# Introduction

JavaScript is a **single-threaded, synchronous** programming language that supports **asynchronous operations** through its runtime environment (Browser or Node.js).

---

## What does this mean?

### Single-threaded

- JavaScript runs **one task at a time**
- It has only **one call stack**

### Synchronous

- Code executes **line by line**
- Each line waits for the previous one to finish

### Asynchronous Operations

- Some tasks take time (API calls, timers, user events)
- These tasks run **without blocking** the main thread
- JavaScript continues executing other code while waiting

```js
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
```
