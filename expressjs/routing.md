# 🟩 Express.js Routing

When your app grows, putting every single route inside `server.js` makes your code messy. Express gives you `express.Router()` to split your routes into separate files safely.

## 📁 1. The Folder Structure

Create a dedicated folder for your routes:

```text
your-project/
 ├── routes/
 │    └── userRoutes.js
 └── server.js
```

## ✂️ 2. Create the Route File

Inside `routes/userRoutes.js`, you create a mini-app using `express.Router()`. Use `router` instead of `app`.

```javascript
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("List of all users"));
router.post("/", (req, res) => res.send("Create a user"));
```

## ⛓️ 3. Chaining Methods (`router.route`)

If you have multiple methods (GET, PUT, DELETE) hitting the **exact same URL path**, you can chain them together using `router.route()`. This saves you from typing the same URL over and over.

```javascript
// Instead of writing router.get("/:id"), router.put("/:id"), etc...

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Fetch user ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user ${req.params.id}`);
  });

// Export the router at the very bottom
module.exports = router;
```

## 🔌 4. Connect it to your Server

Now, go to your main `server.js` file, import the route, and connect it using `app.use()`.

```javascript
const express = require("express");
const app = express();

// 1. Import your custom route file
const userRoutes = require("./routes/userRoutes");

// 2. Tell Express: "Any request starting with /users goes to userRoutes"
app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server running!"));
```

---

## ⚡ How the URLs map together

Because we set the base path to `/users` in `server.js`, it automatically prefixes all routes inside that specific file:

- Visit `/users/` ➡️ Triggers `router.get("/")`
- Visit `/users/99` with a GET request ➡️ Triggers the `.get` inside `router.route("/:id")`
- Visit `/users/99` with a PUT request ➡️ Triggers the `.put` inside `router.route("/:id")`
