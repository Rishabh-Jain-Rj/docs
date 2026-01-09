# 📌 Async / Await

`async / await` is used to handle **asynchronous operations** (like API calls) in a **clean and readable way**, without blocking JavaScript.

It allows JavaScript to **wait for async results** while still keeping the application responsive.

---

## The Problem Async / Await Solves

JavaScript is **single-threaded**, which means it cannot pause execution for slow operations like:

- API requests
- database calls
- timers

Without async handling, these operations would **block the entire application**.

Before `async / await`, developers used:

- callbacks (callback hell)
- chained promises (`.then()`)

These approaches worked but often made code:

- hard to read
- difficult to debug
- difficult to maintain

`async / await` solves this by allowing asynchronous code to be written in a **synchronous-looking flow**, while still remaining **non-blocking**.

## Example

```
async function loadData() {
  const data = await fetchData();
  console.log(data);
}

```
