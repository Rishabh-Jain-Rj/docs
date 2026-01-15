# 🟨 Event Bubbling & Event Capturing

When an event (like `click`) happens, it **propagates through the DOM** in phases.

---

## Event Capturing

- Event travels **from parent → child**
- Order: `window → document → ... → target`
- **Disabled by default**
- Enable by passing `true`

```js
parent.addEventListener(
  "click",
  () => {
    console.log("Capturing");
  },
  true
);
```

## Event Bubbling

- Event travels **from child → parent**
- Order: `target → ... → document → window`
- **Enabled by default**

```js
parent.addEventListener("click", () => {
  console.log("Bubbling");
});
```

### Important Point

- To **capture an event**, the listener must be attached to a **parent (ancestor) element** with `true`.
- Capturing happens **while the event travels from parent → child**.
- Adding `true` on the **target element** has no practical effect because there is no child below it to capture from.
- **event.stopPropagation()** → Stops the event from moving further
