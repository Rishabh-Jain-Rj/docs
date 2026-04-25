# 🟩 Express.js Introduction

Express.js is a popular framework for Node.js. It makes building web servers and APIs much easier than using raw Node.js. Instead of writing complex setup code from scratch, Express gives you simple tools to handle routes, requests, and responses.

**Quick Install:**

```bash
npm install express
```

## 🖥️ Basic Server Setup

Here is the simple code you need to start an Express server:

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Set up a simple GET route
app.get("/", (req, res) => {
  res.send("Hello World! 🌍");
});

// Start listening for requests
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
```

## 📤 Common Response Methods

When someone visits your route, your server needs to reply. Express gives you a few handy ways to do this using the `res` (response) object.

### ✅ `res.status()`

Use this to set the HTTP status code (like 200 for success, or 404 for not found) before sending the final response.

```javascript
res.status(200).send("All good!");
res.status(404).send("Page not found.");
res.status(500).send("Something broke on the server.");
```

### ✅ `res.json()`

Perfect for building APIs. It automatically converts your JavaScript objects or arrays into JSON format and sends it back to the user.

```javascript
res.json({
  success: true,
  message: "Data fetched successfully",
  user: "Guest",
});
```

### ✅ `res.download()`

Forces the user's browser to download a specific file from your server.

```javascript
// Just provide the file path and the name the downloaded file should have
res.download("./public/files/cheatsheet.pdf", "Express_Guide.pdf");
```
