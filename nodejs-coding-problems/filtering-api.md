# 🧠 Query-based Filtering API

## 📌 Problem Statement

Build a simple Node.js server that filters users based on a query parameter.

---

## 🎯 Requirements

- Endpoint: `GET /users`
- Accept query param: `name`
- Return users matching the given name

---

## 📂 Mock Data

```js
const users = [
  { id: 1, name: "Rishabh", age: 22, role: "developer" },
  { id: 2, name: "Amit", age: 25, role: "designer" },
  { id: 3, name: "Neha", age: 21, role: "developer" },
  { id: 4, name: "Sanya", age: 24, role: "manager" },
  { id: 5, name: "Rahul", age: 23, role: "developer" },
];
```

---

## 🧪 Example

```
/users?name=Rishabh
```

---

## 💡 Solution

<details>
<summary>Using Express</summary>

```js
const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Rishabh", age: 22, role: "developer" },
  { id: 2, name: "Amit", age: 25, role: "designer" },
  { id: 3, name: "Neha", age: 21, role: "developer" },
  { id: 4, name: "Sanya", age: 24, role: "manager" },
  { id: 5, name: "Rahul", age: 23, role: "developer" },
];

app.get("/users", (req, res) => {
  const { name } = req.query;

  const result = users.filter(
    (user) => user.name.toLowerCase() === name.toLowerCase(),
  );

  res.json(result);
});

app.listen(3000);
```

### Explanation

- `express()` creates server
- `req.query.name` gets query value
- `filter()` loops through users
- `toLowerCase()` makes it case-insensitive
- `res.json()` sends response

</details>

---

<details>
<summary>Using Node.js HTTP</summary>

```js
const http = require("http");
const url = require("url");

const users = [
  { id: 1, name: "Rishabh", age: 22, role: "developer" },
  { id: 2, name: "Amit", age: 25, role: "designer" },
  { id: 3, name: "Neha", age: 21, role: "developer" },
  { id: 4, name: "Sanya", age: 24, role: "manager" },
  { id: 5, name: "Rahul", age: 23, role: "developer" },
];

http
  .createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname === "/users") {
      const result = users.filter(
        (user) => user.name.toLowerCase() === query.name.toLowerCase(),
      );

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    }
  })
  .listen(3000);
```

### Explanation

- `http.createServer` creates server
- `url.parse` extracts query
- Check route `/users`
- `filter()` loops users
- Compare name (case-insensitive)
- Send response using `res.end()`

</details>
