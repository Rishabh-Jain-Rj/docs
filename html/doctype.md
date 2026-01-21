# 🟧 DOCTYPE in HTML

## What is DOCTYPE?

`<!DOCTYPE>` tells the browser **which HTML version** the page is using.

It helps the browser render the page **correctly and consistently**.

---

## Why DOCTYPE is Important

- Prevents old browser behavior (quirks mode)
- Ensures modern HTML and CSS work properly
- Keeps layout consistent across browsers

> **Quirks Mode** is a browser mode where the browser behaves like old browsers to support outdated websites.  
> In this mode, CSS may behave differently, layouts can break, and styles may be inconsistent across browsers.

---

## Modern HTML (Recommended)

Use this for all new websites:

```html
<!DOCTYPE html>
```

### HTML5 (Recommended)

- Used for HTML5
- Simple and standard
- Works in all modern browsers

---

### Older HTML Version

**HTML 4.01**

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

- Used for very old websites
- Not recommended for new projects
