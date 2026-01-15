# ⚛️ React Lifecycle Methods

Lifecycle methods define the different stages a component goes through from appearing on the screen to being removed.

They represent different **phases of a component’s life**.

---

## Lifecycle Phases

### 1. Mounting (Component is created)

This phase happens when a component is added to the DOM.

- `constructor()` – initialize state
- `render()` – returns UI
- `componentDidMount()` – runs after first render

**Use case:**

- API calls
- timers
- subscriptions

---

### 2. Updating (Component changes)

This phase happens when **props or state change**.

- `render()` – re-renders UI
- `componentDidUpdate()` – runs after update

**Use case:**

- respond to prop/state changes
- update external data

---

### 3. Unmounting (Component is removed)

This phase happens when a component is removed from the DOM.

- `componentWillUnmount()`

**Use case:**

- clear timers
- remove listeners
- cleanup tasks

---

## Lifecycle in Functional Components (Hooks)

In modern React, lifecycle behavior is handled using **`useEffect`**.

| Class Lifecycle        | Hook Equivalent                 |
| ---------------------- | ------------------------------- |
| `componentDidMount`    | `useEffect(() => {}, [])`       |
| `componentDidUpdate`   | `useEffect(() => {}, [deps])`   |
| `componentWillUnmount` | cleanup function in `useEffect` |

---

### Cleanup in useEffect

The cleanup function runs when the component is **removed from the UI**.

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

## Key Points

- Lifecycle methods exist mainly in **class components**
- Functional components use **hooks instead**
- `render()` runs on mount and update
- Cleanup is important to avoid memory leaks
