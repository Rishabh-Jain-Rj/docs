# 🟨 Event Delegation

**Event Delegation** is a technique where a **single event listener** is added to a **parent element** to handle events triggered by its **child elements** using **event bubbling**.

---

## Example (E-commerce – Buy Now Buttons)

### index.html

```html
<div id="products">
  <div class="product">
    <h4>Product A</h4>
    <button data-name="product a">Buy Now</button>
  </div>

  <div class="product">
    <h4>Product B</h4>
    <button data-name="product b">Buy Now</button>
  </div>
</div>
```

### scripts.js

```js
const products = document.getElementById("products");

products.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const productName = event.target.dataset.name;
    console.log("Buying:", productName);
  }
});
```
