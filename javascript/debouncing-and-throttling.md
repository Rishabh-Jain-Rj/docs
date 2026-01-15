# 🟨 Debouncing & Throttling

When users interact with the UI (typing, scrolling, resizing), some events fire **many times very quickly**. Calling a function every time can hurt performance.

Debouncing and throttling are techniques to **control how often a function runs**.

---

## Debouncing

Debouncing means:
👉 _“Run the function **only after the user has stopped triggering the event** for a certain time.”_

If the event keeps happening, the function **does not run**.

> for e.g. To avoid calling the API on every keystroke, debounce waits until the user **stops typing** before making the request.

**Common use cases**

- Search input (API call after typing stops)
- Form validation
- Window resize

### ✅ Debounce Implementation

```js
// Debounce funtion
const debounce = (fn, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// Usage
const search = (str) => {
  console.log("searching for " + str);
};

const debounceWithSearch = debounce(search, 3000);

debounceWithSearch("r");
debounceWithSearch("ri");
debounceWithSearch("ris");
```

**🧠 Code Explanation**

- `debounce(fn, delay)` creates a debounced version of a function
- `timerId` stores the timeout reference using **closure**
- On every call, `clearTimeout(timerId)` cancels the previous timer
- A new timer is started with `setTimeout`
- The function executes only after the delay
- `...args` collects the latest arguments and passes them when the function runs

As a result, the function is called **once**, using the **last input value**.

---

## Throttling

Throttling limits a function to run **once per fixed time interval**, even if the event keeps firing.

### How it works

- Runs immediately on the first event
- Ignores events during the interval
- Runs again after the interval

### When to use

- When **continuous updates** are needed at a controlled rate

### Common use cases

- Scroll handling
- Mouse movement
- Button click prevention

### ✅ Throttle Implementation

```js
//throttle
const throttle = (fn, limit) => {
  let lastCall = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
};

//usage
const handleScroll = () => {
  console.log("Scroll event handled");
};
const throttledScroll = throttle(handleScroll, 300);
window.addEventListener("scroll", throttledScroll);
```

**🧠 Code Explanation**

- `throttle(fn, limit)` returns a throttled version of a function
- `lastCall` stores the timestamp of the last execution
- On every event, the current time is checked
- The function runs only if the time limit has passed
- Extra calls within the limit are ignored

As a result, the function executes **at a controlled rate** during continuous events.

### Other implementation

```js
const throttle = (fn, delay) => {
  let timer;

  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
```

---

## Simple Difference

- **Debounce** → wait until user stops, then run once
- **Throttle** → run continuously, but with a time limit
