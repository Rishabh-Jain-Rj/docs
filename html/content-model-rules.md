# 🟧 Content Model Rules

## What are Content Model Rules?

HTML **content model rules** define:

- Which elements can be placed inside other elements
- What kind of content an element can contain

## HTML Content Model Rules

| Element         | Rule                                    | Valid / Invalid Example         |
| --------------- | --------------------------------------- | ------------------------------- |
| `<p>`           | Cannot contain block-level elements     | ❌ `<p><div></div></p>`         |
| `<a>`           | Can wrap block elements in HTML5        | ✔ `<a><div></div></a>`          |
| `<a>`           | Cannot contain another `<a>`            | ❌ `<a><a></a></a>`             |
| `<ul>`, `<ol>`  | Can contain only `<li>`                 | ❌ `<ul><div></div></ul>`       |
| `<li>`          | Must be inside `<ul>` or `<ol>`         | ❌ `<li></li>` alone            |
| `<table>`       | Has strict structure (`tr`, `td`, `th`) | ❌ `<table><div></div></table>` |
| `<form>`        | Cannot be nested                        | ❌ `<form><form></form></form>` |
| `<main>`        | Only one per page                       | ❌ Multiple `<main>`            |
| `<main>`        | Cannot be inside sectioning content     | ❌ Inside `<article>`           |
| Inline elements | Should not contain block elements       | ❌ `<span><div></div></span>`   |
| Block elements  | Can contain inline elements             | ✔ `<div><span></span></div>`    |
| Headings        | Should follow order (`h1 → h6`)         | ⚠ Skipping levels               |

## Invalid HTML vs Browser Correction

Browsers are **error-tolerant**, meaning they try to render pages even when HTML is invalid.

When invalid HTML is detected:

- The browser automatically closes or rearranges tags
- The page renders without throwing visible errors

> Browsers **auto-correct invalid HTML**, but this can lead to unexpected DOM structure, CSS issues, and JavaScript bugs.

> **Valid HTML** follows all HTML specification rules

---

### Invalid HTML

```html
<p><div>Hello</div></p>
```

### Browser-Corrected HTML (Internal DOM)

```html
<p></p>
<div>Hello</div>
<p></p>
```
