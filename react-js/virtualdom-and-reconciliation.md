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

## Key Points

- Virtual DOM is **not** the real DOM.
- Reconciliation finds the differences between Virtual DOM trees.
- React updates only the required DOM nodes.
- Virtual DOM improves performance, not replaces the real DOM.
