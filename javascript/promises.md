# 🟨 Promises

A **Promise** is an object that represents a value that will be available **in the future** — either **successfully (resolved)** or **with an error (rejected)**.

Promises are mainly used to handle **asynchronous operations** like fetching data from a server.

---

## 🚦 Promise States

A Promise can be in **one of three states**:

- **Pending** → initial state (still waiting)
- **Resolved** → operation completed successfully
- **Rejected** → operation failed

---

## 💻 Example: Promise resolves on Button Click

```js
const button = document.getElementById("btn");

const myPromise = new Promise((resolve, reject) => {
  button.addEventListener("click", () => {
    resolve("Promise resolved");
  });
});

myPromise.then((res) => console.log(res));
```

---

## 🤝 Promise.all()

What if you need to fetch data from two different places, and you need both before your app can load? Doing them one by one is slow.

`Promise.all()` lets you run multiple promises **at the exact same time** (concurrently).

| Feature                 | How it behaves                                                                                          |
| :---------------------- | :------------------------------------------------------------------------------------------------------ |
| **Success**             | It waits for _all_ promises to finish and gives you an array containing all the results.                |
| **Failure (Fail-Fast)** | If even _one_ promise fails, the entire `Promise.all()` instantly throws an error and ignores the rest. |

### 💻 Example: Fetching multiple things at once

```js
const fetchUsers = fetch("/api/users");
const fetchPosts = fetch("/api/posts");

// Pass an array of promises
Promise.all([fetchUsers, fetchPosts])
  .then(([users, posts]) => {
    console.log("Both users and posts are ready!");
  })
  .catch((error) => {
    console.log("Uh oh, one of the requests failed:", error);
  });
```
