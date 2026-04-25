# 🟩 Express.js Data Extraction

When users interact with your server, they send data (like an ID to search for, or a form to submit). Express gives you three main ways to grab this data.

---

## 🔗 1. URL Parameters (`req.params`)

**Best for:** Identifying a single, specific item (like grabbing a user by their ID).
**How it looks in the browser:** `yoursite.com/users/99`

You create a variable in the URL path by adding a colon (`:`).

```javascript
// The ":id" tells Express to treat that part of the URL as a variable
app.get("/users/:id", (req, res) => {
  // Grab the exact value the user typed
  const userId = req.params.id;

  res.send(`Fetching profile for user ID: ${userId}`);
});
```

_If a user visits `/users/rishabh`, `req.params.id` will equal `"rishabh"`._

---

## 🔎 2. Query Strings (`req.query`)

**Best for:** Filtering, sorting, or searching through a list.
**How it looks in the browser:** `yoursite.com/users?role=admin&age=25`

Query strings always start with a `?` at the end of a URL. You don't need to define them in your route path; Express grabs them automatically.

```javascript
// Keep the route path simple
app.get("/users", (req, res) => {
  // Express turns the URL query into a JavaScript object
  const userRole = req.query.role; // "admin"
  const userAge = req.query.age; // "25"

  res.send(`Showing ${userRole} users who are ${userAge} years old.`);
});
```

---

## 📦 3. The Request Body (`req.body`)

**Best for:** Securely sending large amounts of data, like submitting a form, passwords, or JSON payloads (usually in POST or PUT requests).

**🚨 CRITICAL STEP:** By default, Express is blind to the body. You **must** add a line of middleware at the top of your `server.js` file to read JSON data.

```javascript
const express = require("express");
const app = express();

// 1. You MUST include this to read JSON bodies!
app.use(express.json());

// 2. Now you can read req.body inside your POST routes
app.post("/users", (req, res) => {
  const incomingData = req.body;

  // Example: { name: "Rishabh", skill: "Full-Stack" }
  res.send(`Welcome ${incomingData.name}!`);
});
```

---

## ⚡ Quick Reference Cheat Sheet

| Object           | Where is the data?        | URL Example       | Use Case                |
| :--------------- | :------------------------ | :---------------- | :---------------------- |
| **`req.params`** | Inside the URL path       | `/users/99`       | Getting a specific item |
| **`req.query`**  | End of URL (after `?`)    | `/users?sort=asc` | Filtering or searching  |
| **`req.body`**   | Hidden inside the request | _(No URL change)_ | Forms, JSON, Passwords  |
