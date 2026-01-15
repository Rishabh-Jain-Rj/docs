# 📌 JSX (JavaScript XML)

### What is JSX?

JSX allows writing **HTML-like code inside JavaScript** to describe UI.

```jsx
const element = <h1>Hello React</h1>;
```

### How JSX Works

Browsers do not understand JSX directly, so before the code runs in the browser, JSX is converted into plain JavaScript during the build process using tools like `Babel`.

```js
React.createElement("h1", { className: "title" }, "Hello React");
```

| Part            | Meaning                                                |
| --------------- | ------------------------------------------------------ |
| `"h1"`          | What element to create                                 |
| `null`          | Props (attributes like className, style, events, etc.) |
| `"Hello React"` | Content (children)                                     |

### Important JSX Rules

- Must return one parent element
- Use `className` instead of `class`
- JavaScript expressions go inside `{ }`
- JSX supports expressions, not statements

### Points to remember

- JSX is not mandatory
- JSX is syntactic sugar
- JSX is compiled at build time
- `if` and `for` cannot be used directly inside JSX

> Syntactic sugar means a simpler and more readable way to write code that does the same thing as longer or more complex code.
