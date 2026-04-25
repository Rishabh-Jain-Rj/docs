# 🟩 Template Engines (Express.js)

**The Main Use Case:**
Express is great at sending raw data (JSON) for APIs. But what if you want your Express server to directly serve actual HTML web pages to the browser?

That's exactly what template engines do. They allow Express to serve HTML files and inject live backend data (like usernames or database items) into them before sending them to the user.

**Popular Engines:**

- **EJS:** The easiest. Just normal HTML + special tags like `<%= data %>`.
- **Handlebars:** Clean HTML using double mustaches like `{{ data }}`.
- **Pug:** Minimalist. Drops HTML brackets entirely and uses indentation.

---

## 🚀 Quick EJS Setup (Serving an HTML view)

**1. Install:**

```bash
npm install ejs
```

**2. Server Setup:**

```javascript
const express = require("express");
const app = express();

// Tell Express to use EJS to serve our HTML views
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // Finds "index.ejs", injects the data, and serves the final HTML page
  res.render("index", { name: "Rishabh" });
});

app.listen(3000, () => console.log("Server running!"));
```

**3. Create the HTML/Template File:**
Express automatically looks inside a folder called `views`.

Create a file at `views/index.ejs`:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome back, <%= name %>! 👋</h1>
  </body>
</html>
```

---

## ⚡ How Express sends responses

| Method               | What it does                                                |
| :------------------- | :---------------------------------------------------------- |
| **`res.json()`**     | Sends raw data. Used when building APIs for React/Vue/etc.  |
| **`res.sendFile()`** | Serves a boring, static HTML file. No dynamic data allowed. |
| **`res.render()`**   | Serves dynamic HTML files using a template engine.          |
