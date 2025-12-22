# Promises

A **Promise** is an object that represents a value that will be available **in the future** —  
either **successfully (resolved)** or **with an error (rejected)**.

Promises are mainly used to handle **asynchronous operations**.

---

## Promise States

A Promise can be in **one of three states**:

- **Pending** → initial state
- **Fulfilled** → operation completed successfully
- **Rejected** → operation failed

---

## Example: Promise resolves on Button Click

```js
const button = document.getElementById("btn");

const myPromise = new Promise((resolve, reject) => {
  button.addEventListener("click", () => {
    resolve("Promise resolved");
  });
});

myPromise.then((res) => console.log(res));
```
