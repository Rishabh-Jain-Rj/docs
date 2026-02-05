# ⚛️ Axios

## 📌 What is Axios?

Axios is a JavaScript library used to make HTTP requests from the browser or Node.js.

---

## 🎯 Why Use Axios Instead of Fetch?

### ✅ Automatic JSON Parsing

Axios automatically returns response data.

```js
const res = await axios.get("/api/data");
console.log(res.data);
```

Fetch requires manual parsing.

```js
const res = await fetch("/api/data");
const data = await res.json();
```

### ✅ Better Error Handling

Axios automatically throws errors for HTTP status codes outside 2xx.

```js
try {
  await axios.get("/api");
} catch (error) {
  console.log(error.response);
}
```

### ✅ Supports Interceptors

Allows modifying requests and responses globally.

```js
axios.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer token";
  return config;
});
```

### ✅ Supports Request Cancellation

Axios supports cancelling requests using AbortController.

```js
const controller = new AbortController();

axios.get("/api", {
  signal: controller.signal,
});

controller.abort();
```

### ✅ Timeout Support

Axios provides built-in timeout configuration.

```js
axios.get("/api", { timeout: 5000 });
```

> Axios provides better error handling, interceptors, cancellation support, global configuration, timeout handling, and cleaner syntax compared to Fetch.
