# 🟩 Mongoose (Connecting Express & MongoDB)

MongoDB is famous for letting you save basically anything into your database. That flexibility is awesome, but it can also cause huge headaches if you accidentally save a user's age as a word ("twenty") instead of a number (`20`).

**Mongoose is the solution.** Think of Mongoose as a strict bouncer for your database. You give it a set of rules (like "ages must be numbers" and "passwords are required"), and Mongoose will reject any data that doesn't follow the rules before it ever reaches MongoDB.

---

## 🚀 1. Installation

First, grab the package from npm.

```bash
npm install mongoose
```

---

## 🔌 2. Connecting to the Database

You'll want to connect to your database right when your server starts up. This usually happens in your main `server.js` file.

```javascript
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Tell Mongoose where your database lives (local or Atlas link)
const MONGO_URI = "mongodb://127.0.0.1:27017/my_database";

// Make the connection!
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Database connected!"))
  .catch((err) => console.log("❌ Database failed to connect:", err));

app.listen(3000, () => console.log("Server is running."));
```

---

## 🏗️ 3. Creating your Rules (Schemas & Models)

We usually keep our database rules in a separate folder called `models`.

A **Schema** is the blueprint (the rules).
A **Model** is the actual tool you use to talk to the database using those rules.

**Create a file at `models/User.js`:**

```javascript
const mongoose = require("mongoose");

// 1. The Blueprint (Schema)
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // They can't sign up without a name!
    },
    email: {
      type: String,
      required: true,
      unique: true, // Mongoose stops two people from using the same email
    },
    age: {
      type: Number,
      min: 18, // Rejects anyone under 18 automatically
    },
    role: {
      type: String,
      default: "Viewer", // If we don't give them a role, they default to Viewer
    },
  },
  { timestamps: true },
); // A nice trick: automatically adds 'createdAt' dates for us!

// 2. Export the Model
// We call it "User", and Mongoose will automatically create a "users" collection for it.
module.exports = mongoose.model("User", userSchema);
```

---

## 🕹️ 4. Using your Model in Controllers

Now, you can import your `User` model into your route or controller files to actually save and fetch data.

_Note: Talking to a database takes a tiny bit of time, so we always use `async/await` to tell JavaScript to wait for the database to finish._

```javascript
const User = require("../models/User");

// 🟢 CREATE a new user
const createUser = async (req, res) => {
  try {
    // req.body has the data the user typed into the frontend form
    const newUser = await User.create(req.body);

    // Send back the newly created user!
    res.status(201).json(newUser);
  } catch (error) {
    // If they broke our Schema rules (like forgetting a name), it jumps down here
    res
      .status(400)
      .send("Uh oh, failed to create user. Did you follow the rules?");
  }
};

// 🔵 READ all users
const getAllUsers = async (req, res) => {
  try {
    // .find() with nothing inside gets every single user
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Something went wrong on our end.");
  }
};
```
