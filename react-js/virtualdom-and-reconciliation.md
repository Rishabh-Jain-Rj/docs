# ⚛️ Virtual DOM & Reconciliation

## Virtual DOM

The **Virtual DOM** is a lightweight JavaScript representation of the real DOM.

React uses it to track UI changes without updating the real DOM directly.

---

### How it works

1. React creates a **Virtual DOM** (JavaScript objects) that represents the UI.
2. When **state or props change**, React creates a **new Virtual DOM**.
3. React **compares** the new Virtual DOM with the previous one.
4. React finds **only the elements that changed**.
5. React updates **only those specific nodes** in the real DOM.
6. The rest of the DOM remains untouched.

---

## Reconciliation

**Reconciliation** is the process of comparing the old and new Virtual DOM to find what changed.

React uses this process to decide which parts of the real DOM need to be updated.

---

## Why We Compare Virtual DOMs Instead of Real DOMs

- Virtual DOMs are **simple JavaScript objects**.
- Comparing JavaScript objects is **fast**.
- Real DOM operations are **slow** because the browser must:
  - recalculate layout
  - repaint the screen
- Comparing the real DOM directly would cause **extra browser work**.
- React compares Virtual DOMs first and updates **only the needed parts** of the real DOM.

## Key Points

- Virtual DOM is **not** the real DOM.
- Reconciliation finds the differences between Virtual DOM trees.
- React updates only the required DOM nodes.
- Virtual DOM improves performance, not replaces the real DOM.

> “`console.log(<App />)` logs a React element object, which looks like part of the Virtual DOM, but the full Virtual DOM tree is internal to React.”
