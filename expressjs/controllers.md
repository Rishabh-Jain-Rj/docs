# 🟩 Express.js Controllers (Keeping Routes Clean)

If you put all your database logic, error checking, and math directly inside your route files, they will quickly become massive and impossible to read.

**The Solution:** Controllers.
We split the job into two clear parts:

1. **Routes** act as the _traffic cops_ (they just point the URL to the right place).
2. **Controllers** are the _workers_ (they hold the actual logic and talk to the database).

---

## 📁 1. The Folder Structure

We create a new folder dedicated entirely to business logic.

```text
your-project/
 ├── controllers/
 │    └── userController.js   <-- The Logic (Worker)
 ├── routes/
 │    └── userRoutes.js       <-- The Traffic Cop
 └── server.js
```

---

## 🧠 2. Create the Controller

Inside `controllers/userController.js`, we write our standard `(req, res)` functions, give them clear names, and export them.

```javascript
// Function to get all users
const getAllUsers = (req, res) => {
  // In a real app, you would fetch data from MongoDB or SQL here
  res.send("Sending a list of all users!");
};

// Function to create a user
const createUser = (req, res) => {
  const newUserName = req.body.name;
  res.status(201).send(`User ${newUserName} created successfully.`);
};

// Export them as an object so the router can use them
module.exports = {
  getAllUsers,
  createUser,
};
```

---

## 🚦 3. Connect it to the Router

Now look how clean and beautiful your `routes/userRoutes.js` file becomes! We import the functions and plug them directly into the routes.

```javascript
const express = require("express");
const router = express.Router();

// 1. Import the controller functions
const { getAllUsers, createUser } = require("../controllers/userController");

// 2. Plug them in (Do NOT add parentheses after the function names!)
router.get("/", getAllUsers);
router.post("/", createUser);

module.exports = router;
```

---

## ⚡ Quick Tip: Async/Await

Because controllers usually talk to databases (which takes time), your controller functions will almost always be `async`.

```javascript
// Real world example using async/await
const getUserById = async (req, res) => {
  try {
    const user = await Database.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
```
