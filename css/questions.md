# 🎨 CSS Interview Questions

This document contains **important and tricky CSS interview questions** focused on **conceptual and practical understanding**.

## Question 1

What is the CSS Box Model?

<details>
  <summary><strong>Show Answer</strong></summary>

The CSS Box Model defines the layout of elements as rectangular boxes consisting of:

- **Content** – Actual text or media
- **Padding** – Space between content and border
- **Border** – Surrounds padding and content
- **Margin** – Space outside the border

**Order:** `Content → Padding → Border → Margin`

</details>

---

## Question 2

What is the difference between **Flexbox** and **Grid** in CSS?

<details>
  <summary><strong>Show Answer</strong></summary>

| Feature       | Flexbox                                 | Grid                                    |
| ------------- | --------------------------------------- | --------------------------------------- |
| Layout Type   | One-dimensional (row OR column)         | Two-dimensional (row AND column)        |
| Best Used For | Aligning items in a single direction    | Creating full page or complex layouts   |
| Control       | Controls alignment and spacing of items | Controls layout structure and placement |
| Complexity    | Simple and flexible                     | More powerful but slightly complex      |

</details>

---

## Question 3

What is the difference between `px`, `rem`, `em`, and `%` in CSS?

<details>
<summary>Show Answer</summary>

**1. `px` (Pixels)**
Fixed size.
👉 `16px` will always be `16px`.

**2. `rem`**
Based on root (`html`) font size.
👉 `1rem` = usually `16px`.

**3. `em`**
Based on parent font size.
👉 Can change depending on parent.

**4. `%` (Percentage)**
Based on parent size (width/height).
👉 Used for layouts.

---

### Simple Difference

👉 **`px`** → Fixed size  
👉 **`rem`** → Based on root  
👉 **`em`** → Based on parent  
👉 **`%`** → Based on parent size

</details>
