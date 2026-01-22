# 🟨 BOM vs DOM

In JavaScript, browsers provide two main models to interact with web pages and the browser itself:

- **DOM (Document Object Model)**
- **BOM (Browser Object Model)**

---

## DOM (Document Object Model)

- Represents the **HTML document structure**
- Created from HTML by the browser
- Allows JavaScript to **read and modify HTML elements**
- Exists only in the browser environment

### Common DOM examples

```js
document.getElementById("app");
document.querySelector("div");
element.innerText = "Hello";
```

## BOM (Browser Object Model)

- Represents the browser environment
- Not related to the HTML structure
- Provides access to browser features
- Exists even without an HTML page

### Common BOM examples

```js
window.location;
window.history;
window.navigator;
window.alert();
```
