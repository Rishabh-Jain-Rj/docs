# 🎨 CSS Specificity

## What is CSS Specificity?

CSS specificity is the mechanism used by browsers to decide **which CSS selector wins** when multiple selectors target the same HTML element.

It works as a **priority score for selectors**.

---

## Specificity Order (High → Low)

1. Inline styles
2. ID selectors
3. Class / Attribute / Pseudo-class selectors
4. Element / Pseudo-element selectors

---

## Specificity Calculation Format

Specificity is calculated as a four-part value:

```
(inline, id, class, element)
```

Each selector increases one part of this value.

---

## Specificity Values

- Inline style → `1,0,0,0`
- ID selector → `0,1,0,0`
- Class / Attribute / Pseudo-class → `0,0,1,0`
- Element / Pseudo-element → `0,0,0,1`

---

## Key Rules

- If specificity is higher, the rule with higher specificity wins.
- If specificity is equal, the rule written last wins.
- `!important` does not follow specificity rules and always overrides other selectors.
