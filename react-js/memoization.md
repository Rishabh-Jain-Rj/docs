# ⚛️ Memoization in React (React.memo, useCallback & useMemo)

Memoization helps React **avoid unnecessary work** during re-renders.

React provides three tools for memoization:

- `React.memo`
- `useCallback`
- `useMemo`

---

## React.memo

`React.memo` memoizes a **component**.

- Prevents re-render if **props do not change**
- Uses **shallow comparison** of props
- Works only with **props**, not state

> **Shallow comparison** means React compares **primitive props by value** and **objects/functions by reference**, not by deeply checking their values.  
> Because objects and functions get new references on each render, a component may re-render even if the data appears unchanged.

**Use when:**

- Child component re-renders unnecessarily
- Props change rarely

```js
const Child = React.memo(ChildComponent);
```

---

## useCallback

`useCallback` memoizes a **function**.

- Prevents function recreation on every render
- Useful when passing functions to memoized components
- Function is recreated **only when dependencies change**

> **Important:** Without correct dependencies, a memoized function can capture **stale values**, meaning it keeps using old state or props from a previous render instead of the latest values.

```js
const handleClick = useCallback(() => {
  doSomething();
}, [deps]);
```

---

## useMemo

`useMemo` memoizes a **value**.

- Caches result of a calculation
- Recalculates only when dependencies change
- Used for **expensive computations**

```js
const result = useMemo(() => {
  return computeValue();
}, [deps]);
```

---

## Key Differences (Important)

| Tool          | Memoizes  | Prevents                |
| ------------- | --------- | ----------------------- |
| `React.memo`  | Component | Unnecessary re-renders  |
| `useCallback` | Function  | Function recreation     |
| `useMemo`     | Value     | Expensive recalculation |

---

## Important Points

- `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`
- All three rely on **closures**
- Dependencies tell React **when to update the memoized value or function**
- Overusing memoization can **reduce readability**
- Use memoization only when there is a **real performance issue**

---

## Common Mistakes

- Using `React.memo` without stabilizing object or function props (new references cause re-renders)
- Forgetting dependencies in `useCallback` / `useMemo`
- Using memoization for simple logic
- Assuming memoization fixes logic bugs

---
