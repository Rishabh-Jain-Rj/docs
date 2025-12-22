# Async / Await

`async / await` is used to handle **asynchronous operations** (like API calls) in a **clean and readable way**, without blocking JavaScript.

It allows JavaScript to **wait for async results** while still keeping the application responsive.

---

## The Problem Async / Await Solves

JavaScript does not wait for slow tasks such as:

- API requests
- database calls
- timers

## Example

```
async function loadData() {
  const data = await fetchData();
  console.log(data);
}

```
