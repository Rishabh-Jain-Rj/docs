# ⚛️ Redux & Redux Toolkit – Simple Guide

## 🧠 What is Redux?

Redux is a **state management library** for JavaScript applications.

It stores **shared application state** in one central place (called the store) so multiple components can access and update it in a predictable way.

---

## ❓ What Problem Does Redux Solve?

Without Redux:

- Prop drilling
- Duplicate state
- Hard-to-track updates

With Redux:

- Single source of truth
- Clear update flow
- Scalable state management

---

## 🧰 What is Redux Toolkit?

Redux Toolkit (RTK) is the **official way to write Redux**.

It simplifies Redux by reducing boilerplate and making state updates easier and safer.

---

## 🔄 Simple Redux Toolkit Flow

```txt
User interacts with UI
 → dispatch(action)
 → reducer updates state
 → store saves state
 → UI re-renders
```

---

## 🧩 Redux Toolkit Essentials

| Component | Purpose        | Simple Explanation                                          |
| --------- | -------------- | ----------------------------------------------------------- |
| Store     | Holds state    | Central place where the entire app state lives              |
| Slice     | State + logic  | Defines initial state, reducers, and actions for a feature  |
| Reducer   | Update logic   | Decides how the state changes when an action happens        |
| Action    | Event          | Represents a user action like click, submit, add, or delete |
| Dispatch  | Trigger update | Sends an action to the store                                |
| Selector  | Read state     | Used by components to read data from the store              |
| Provider  | Connect Redux  | Makes the store available to the React app                  |

> To get started with Redux Toolkit and explore boilerplate code, examples, and detailed guides, visit the official Docs
> [Redux Toolkit Quick Start Documentation](https://redux-toolkit.js.org/tutorials/quick-start)
