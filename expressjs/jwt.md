# 🟩 JWT (JSON Web Tokens) Authentication

Imagine going to a nightclub. To get in, you have to show your ID to the bouncer. But imagine if you had to show your ID _every single time_ you wanted to buy a drink, go to the bathroom, or enter the VIP area. That would be annoying and slow.

Instead, the bouncer checks your ID once, and puts a **stamp** on your hand. For the rest of the night, you just show the stamp.

**A JWT is that stamp.** 1. A user logs in with an email and password (showing ID). 2. The server verifies it and gives them a JWT (the stamp). 3. The user sends that JWT with every future request so the server knows who they are.

---

## 🚀 1. Installation

You only need one package to create and verify these tokens.

```bash
npm install jsonwebtoken
```

---

## 🪪 2. How to Generate a Token (The Login)

When a user logs in successfully, we need to generate a token and send it back to them.

```javascript
const jwt = require("jsonwebtoken");

// In a real app, this should be hidden in a .env file!
const SECRET_KEY = "my_super_secret_password";

app.post("/login", (req, res) => {
  // 1. Check if username/password are correct (pretend we did this)
  const userId = "user_123";

  // 2. Generate the Token (The Stamp)
  // We pack their ID inside it, sign it with our secret key, and make it expire in 1 hour
  const token = jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: "1h" });

  // 3. Send it to the frontend
  res.json({ message: "Login successful!", token: token });
});
```

---

## 🛡️ 3. How to Verify a Token (The Bouncer Middleware)

Now, the user wants to visit their private profile page. They must send the token back to us (usually inside an HTTP header called `Authorization`).

We create a piece of **Middleware** to act as the bouncer. It will check the stamp before letting them into the route.

```javascript
const verifyToken = (req, res, next) => {
  // 1. Grab the token from the headers
  // Usually sent as: "Bearer eyJhbGciOiJIUzI1Ni..."
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Access Denied! No token provided.");
  }

  // Remove the word "Bearer " to just get the raw token string
  const token = authHeader.split(" ")[1];

  try {
    // 2. Verify the stamp using our secret key
    const decoded = jwt.verify(token, SECRET_KEY);

    // 3. Attach the user's ID to the request so the next function can use it
    req.user = decoded;

    // 4. Let them in!
    next();
  } catch (error) {
    res.status(403).send("Invalid or expired token!");
  }
};
```

---

## 🔒 4. Protecting your Routes

Now that we have our `verifyToken` bouncer, we can easily protect any route by just dropping the middleware into it!

```javascript
// A user CANNOT access this route unless they have a valid token
app.get("/profile", verifyToken, (req, res) => {
  // Thanks to the middleware, we know exactly who this is!
  const currentUserId = req.user.id;

  res.send(`Welcome to your private profile, User #${currentUserId}!`);
});
```

---

## ⚡ The 3 Rules of JWTs

1. **Anyone can read them:** A JWT is just encoded text, not encrypted. If you put a user's password inside a JWT, anyone can decode it and see it. **Only put safe data (like an ID or Role) inside the token payload.**
2. **Only the server can trust them:** Because the token is signed with your `SECRET_KEY`, if a hacker tries to change their Role from "Viewer" to "Admin" inside the token, the signature breaks, and `jwt.verify()` will instantly reject it.
3. **Keep the secret safe:** If someone steals your `SECRET_KEY`, they can print their own VIP stamps and hack your entire app. Always use `.env` variables!
