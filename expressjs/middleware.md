# 🟩 Express.js Middleware (The Middleman)

Middleware are simply functions that run **in the middle** of the request-response cycle. When a user sends a request, it goes through your middleware first before hitting your final route logic.

You use middleware to: check if a user is logged in, log activity, parse data, or serve files.

---

## 🧠 1. How Middleware Works (The `next` function)

Every middleware function has access to the request (`req`), the response (`res`), and a special function called `next()`.

**🚨 CRITICAL RULE:** You MUST call `next()` at the end of your middleware. If you don't, your server will hang forever, and the user will just see a loading spinner.

```javascript
const express = require("express");
const app = express();

// A simple custom middleware that logs the time
const timeLogger = (req, res, next) => {
  console.log(`New request at: ${new Date()}`);
  next(); // Passes control to the next function/route!
};

// Use it globally (runs on EVERY request)
app.use(timeLogger);

app.get("/", (req, res) => res.send("Hello!"));
```

---

## 🛠️ 2. Essential Built-in Middleware

Express comes with a few built-in tools that you will use in almost every project.

### A. Parsing JSON (`express.json`)

If a frontend (like React or Postman) sends JSON data to your server, Express cannot read it by default.

```javascript
// Add this at the very top of your server.js
app.use(express.json());

// Now req.body will actually contain your JSON data
app.post("/login", (req, res) => {
  console.log(req.body.username);
});
```

### B. Serving Static Files (`express.static`)

If you want to serve raw HTML, CSS, Images, or Vanilla JS files directly from a folder (without using a template engine), use this.

```javascript
// Tells Express: "Make everything inside the 'public' folder accessible to the browser"
app.use(express.static("public"));
```

_If you have a file at `public/style.css`, the user can view it by visiting `yoursite.com/style.css`._

---

## 🎯 3. Global vs. Route-Specific Middleware

You don't always want middleware to run on _every_ single route.

**Global Middleware (Runs on everything):**

```javascript
app.use(checkUserAuth);
```

**Route-Specific Middleware (Runs ONLY on this specific route):**
You can inject middleware directly into a route by placing it before your final `(req, res)` function.

```javascript
const checkAdmin = (req, res, next) => {
  if (req.query.admin === "true") {
    next(); // Let them in
  } else {
    res.status(403).send("Access Denied!"); // Stop the request here
  }
};

// checkAdmin runs FIRST. If next() is called, it moves to the arrow function.
app.get("/dashboard", checkAdmin, (req, res) => {
  res.send("Welcome to the secret admin dashboard.");
});
```
