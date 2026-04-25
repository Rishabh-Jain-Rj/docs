# 🟧 HTML Interview Question

## Question 1

**What happens if an `<input>` inside a form does NOT have a `name` attribute?**

Points to consider:

- Will the form submit?
- Will the input value be sent to the server?

<details>
  <summary><strong>Show Answer</strong></summary>

**Summary:**  
The form submits, but the input value is not sent.

**Why:**  
Form data is sent as **name–value pairs**. Without `name`, the input is ignored.

**Example:**

```html
<input type="text">      <!-- not sent -->
<input type="text" name="username"> <!-- sent -->
</details>
```

</details>

---

## Question 2

What is the difference between `disabled` and `readonly` attributes?

<details>
  <summary><strong>Show Answer</strong></summary>

- `disabled` → input is not editable and **not submitted** with the form
- `readonly` → input is not editable but **submitted** with the form
- `disabled` inputs cannot be focused
- `readonly` inputs can be focused

</details>

---

## Question 3

What is the difference between `DOMContentLoaded` and `load` events?

<details>
  <summary><strong>Show Answer</strong></summary>

- `DOMContentLoaded` → DOM is ready, media may still load
- `load` → Page and all assets are fully loaded
- `DOMContentLoaded` is faster and commonly used
- `load` is used when images or assets are required

</details>

---

## Question 3

What is the purpose of the `rel="noopener noreferrer"` attribute when using `target="_blank"`?

<details>
  <summary><strong>Show Answer</strong></summary>

When a link opens in a new tab using `target="_blank"`, the new page can access the original page using `window.opener`.

- `noopener` stops the new page from accessing the original page.
- `noreferrer` stops the browser from sending the current page URL to the new page.
- The child page can access the parent window using `window.opener` and the parent URL using `document.referrer`.

This improves security and protects the original page.

</details>

---

## Question 4

Why do we use the `alt` attribute in the `<img>` tag?

<details>
  <summary><strong>Show Answer</strong></summary>

- Shows text if the image does not load
- Helps screen readers describe the image to blind users
- Improves accessibility
- Helps search engines understand the image

</details>

---

## Question 5

Will creating a custom HTML tag like `<rishabh>` throw an error? If not, how does it behave?

<details>
  <summary><strong>Show Answer</strong></summary>

- It will NOT throw any error
- Browsers allow unknown HTML tags
- Unknown tags behave like inline elements by default

</details>

---

## Question 6

What does **UTF-8** mean in HTML?

<details>
  <summary><strong>Show Answer</strong></summary>

**UTF-8** is a character encoding that allows HTML pages to display text, symbols, and characters from almost all languages correctly.

It is defined in HTML using:

```html
<meta charset="UTF-8" />
```

### 🧠 Why it is used

- Supports most global characters and emojis
- Prevents text display issues
- Standard encoding for modern websites

</details>

## Question 7

What is the `aria-label` attribute used for in HTML?

<details>
<summary><strong>Show Answer</strong></summary>

The `aria-label` attribute provides a **text label** for elements that don't have visible text on the screen.

It is commonly used for interactive elements like icon buttons:

```html
<button aria-label="Close Menu">
  <i class="fas fa-times"></i>
</button>
```

### 🧠 Why it is used

- **Accessibility:** Screen readers will **announce** the label so users with visual impairments know the element's purpose.
- **Context:** It provides a name to elements that only contain an icon or graphic.
- **Standards:** It helps your website meet WCAG (Web Content Accessibility Guidelines) requirements.

</details>
