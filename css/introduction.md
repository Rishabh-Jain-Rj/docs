# 🎨 CSS Introduction

## What is CSS?

CSS (Cascading Style Sheets) is a styling language used to control the visual appearance of HTML elements.

> Yes, CSS is a language, but it is **not a programming language**.

HTML defines the structure of a web page, while CSS defines how that structure looks.

**HTML = Structure**  
**CSS = Presentation**

---

## How CSS Works

CSS applies styles using **rules**:

```css
selector {
  property: value;
}
```

Example:

```css
p {
  color: red;
}
```

- `p` → selector
- `color` → property
- `red` → value

---

## What CSS Can Control

CSS is used to manage:

- Colors and fonts
- Spacing and alignment
- Layout (Flexbox, Grid)
- Responsive design
- Animations and transitions
- Themes (light/dark)

---

## “Cascading” Meaning

“Cascading” means:

- Multiple CSS rules can apply to the same element
- The browser decides which rule has higher priority

### CSS Priority Order (High → Low)

1. `!important`
2. Inline styles
3. ID selectors
4. Class / Attribute / Pseudo-class selectors
5. Element / Pseudo-element selectors

---

## Why CSS Exists

Before CSS, styling was written directly inside HTML, which caused:

- Poor readability
- Difficult maintenance
- Repeated styling code

CSS was introduced to separate **content** from **design**, making web pages easier to maintain and scale.

---
