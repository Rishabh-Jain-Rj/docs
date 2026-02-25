# 🎨 CSS Grid

## What is CSS Grid?

Grid is a 2-dimensional layout system. It handles both **rows and columns** at the exact same time, making complex web layouts incredibly simple.

> **Flexbox** is for **1-Dimensional** layouts (a single row OR a single column).

---

## 1. The Container (Parent)

Turn any element into a grid and add spacing:

```css
.container {
  display: grid;
  gap: 20px; /* Space between all rows and columns */
}
```

---

## 2. Sizing Columns & Rows

Grid gives you powerful tools to size your tracks without relying on exact pixels:

- **`fr` (fraction):** Takes up a fraction of the available free space.
- **`repeat()`:** A shortcut to create multiple columns of the same size.
- **`minmax()`:** Sets a minimum and maximum size (great for responsive design).

```css
.container {
  /* Creates 3 equal columns that won't shrink below 200px */
  grid-template-columns: repeat(3, minmax(200px, 1fr));
}
```

---

## 3. Alignment & Spacing

Grid makes centering things incredibly easy.

> **The Golden Rule:** > `justify` = Horizontal (Left/Right)
> `align` = Vertical (Up/Down)

### A. Aligning elements _inside_ their cells

Use these when your grid cells are bigger than the content inside them.

- `justify-items`: Moves content horizontally inside the cell (start, center, end, stretch).
- `align-items`: Moves content vertically inside the cell (start, center, end, stretch).

### B. Aligning the _entire grid_ inside the container

Use these when your parent container is bigger than the whole grid.

- `justify-content`: Moves the entire grid horizontally.
- `align-content`: Moves the entire grid vertically.

---

## 4. Visual Layouts (`grid-template-areas`)

This is the most readable way to build layouts. You literally "draw" your layout using words.

```css
/* 1. Draw the layout on the parent */
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

/* 2. Assign the children to those names */
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

---

## 5. Positioning Items (The Children)

If you aren't using areas, you can manually place children using `grid-column` and `grid-row`.

### By Spanning (Stretching)

Tell an item how many tracks it should stretch across.

```css
.wide-item {
  grid-column: span 2; /* Stretch across 2 columns */
}
```

### By Line Numbers

Grid creates invisible numbered lines. Tell an item where to start and end.

```css
.specific-item {
  grid-column: 1 / 4; /* Start at vertical line 1, end at line 4 */
}
```

---

## ⚡ Grid Quick Reference

**Container Properties (The Parent):**

- `display: grid;` → Activates the grid
- `grid-template-columns` / `rows` → Sets sizes (use `repeat` and `minmax`)
- `grid-template-areas` → Visual mapping of the layout
- `gap` → Spacing between items
- `justify-items` / `align-items` → Aligns items inside their cells
- `justify-content` / `align-content` → Aligns the whole grid inside the container

**Item Properties (The Children):**

- `grid-area` → Assigns the item to a named area
- `grid-column` / `grid-row` → Positions items (`span 2` or `1 / 4`)
- `justify-self` / `align-self` → Overrides alignment for one specific item
