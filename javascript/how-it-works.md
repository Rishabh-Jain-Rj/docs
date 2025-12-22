# JavaScript – How It Works

This document explains **how JavaScript executes code** in the **browser** and **Node.js**, and how the **Event Loop** manages asynchronous operations in a **single-threaded** environment.

---

## JavaScript Execution Basics

JavaScript is:

- **Single-threaded** → one task runs at a time
- **Synchronous by default** → code executes line by line

JavaScript always runs inside a **runtime environment**:

- **Browser** (client-side)
- **Node.js** (server-side)

The language is the same — **only the runtime APIs differ**.

## ⚙️ Core Parts of the Engine

| Component           | Description                                         |
| ------------------- | --------------------------------------------------- |
| **Call Stack**      | JavaScript code gets executed line by line here     |
| **Runtime APIs**    | Handle async tasks like `setTimeout`, `fetch`, `fs` |
| **Microtask Queue** | Stores Promises & `async/await`                     |
| **Macrotask Queue** | Stores timers & event callbacks                     |
| **Event Loop**      | Keeps checking and moving tasks for execution       |

## How JavaScript Executes Code (Step-by-Step)

1. JavaScript starts executing **synchronous code** in the **Call Stack**
2. If an **async operation** is encountered:
   - It is handed over to the **runtime APIs**
   - JavaScript continues executing the remaining code
3. When an async task finishes:
   - Its callback is placed into the **appropriate queue**
4. The **Event Loop** constantly checks whether the **Call Stack is empty**
5. When the Call Stack becomes empty:
   - **All microtasks** are moved to the Call Stack and executed **one by one**
6. After the microtask queue is empty:
   - **One macrotask** is moved to the Call Stack and executed
7. This cycle repeats continuously

---

## Clear Execution Flow (Visual)

```text
Run Synchronous Code
        │
        ▼
    Call Stack
        │
        ▼
Async Operation Found?
        │
        ├─ Yes → Runtime APIs
        │           │
        │           ▼
        │     Task Completed
        │           │
        │           ▼
        │   Microtask / Macrotask Queue
        │
        ▼
Call Stack Empty?
        │
        └─ Yes
              │
              ▼
        EVENT LOOP
              │
              ▼
   Execute ALL Microtasks
              │
              ▼
   Execute ONE Macrotask
              │
              ▼
      Back to Call Stack
              │
              ▼
        Repeat Cycle
```

## Example Code

```js
console.log("A");

setTimeout(() => {
  console.log("T1");
}, 0);

Promise.resolve().then(() => {
  console.log("P1");

  Promise.resolve().then(() => {
    console.log("P2");
  });
});

setTimeout(() => {
  console.log("T2");
}, 0);

console.log("B");
```

## Final Output

```
A
B
P1
P2
T1
T2
```

### What Happens Internally

- `console.log("A")` → executed in Call Stack
- `setTimeout(T1)` → sent to Runtime APIs
- `Promise.then(P1)` → added to Microtask Queue
- `setTimeout(T2)` → sent to Runtime APIs
- `console.log("B")` → executed in Call Stack

## Execution Timeline

Sync Code → A B

---

Microtasks → P1 P2

---

Macrotask (1st) → T1

---

Macrotask (2nd) → T2
