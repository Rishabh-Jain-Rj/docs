# 🟧 Div vs Span

## Div

- Block-level element
- Starts on a new line
- Takes full available width by default
- Width, height, and margin work normally
- Used to group layout or large sections

### Example

```html
<div class="card">
  <h2>Title</h2>
  <p>Description</p>
</div>
```

## Span

- Inline element
- Does not start on a new line
- Takes only the required width
- Width, height, and top/bottom margins have no effect
- Used to style or target small text

> A block element’s margin does not force inline elements to move vertically.

### Example

```html
<p>Hello <span class="highlight">World</span></p>
```
