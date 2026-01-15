# ⚡ Debounce & Throttle

## 📌 Problem Statement

Create a React component that simulates API calls using debounce and throttle.

- The input field should update immediately as the user types.
- Trigger a **debounced API call** only after the user stops typing.
- Trigger a **throttled API call** at fixed intervals while typing.
- Display how many times each API call is triggered.
- Prevent unnecessary re-renders and timer resets.
- Use appropriate React hooks to maintain stable behavior.

This problem focuses on controlling expensive operations using
debounce and throttle in React.

<details>
<summary>Click to view solution</summary>

```jsx
import React, { useMemo, useState } from "react";

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

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

const DebounceAndThrottle = () => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [throttledValue, setThrottledValue] = useState("");
  const [debounceCount, setDebounceCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);

  const debouncedApiCall = useMemo(
    () =>
      debounce((val) => {
        setDebouncedValue(val);
        setDebounceCount((c) => c + 1);
      }, 1000),
    []
  );

  const throttledApiCall = useMemo(
    () =>
      throttle((val) => {
        setThrottledValue(val);
        setThrottleCount((c) => c + 1);
      }, 500),
    []
  );

  return (
    <>
      <h3>API Trigger Control</h3>

      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => {
          debouncedApiCall(e.target.value);
          throttledApiCall(e.target.value);
        }}
      />

      <div style={{ marginTop: "12px" }}>
        <p>
          <strong>Debounced Value:</strong> {debouncedValue}
        </p>
        <p>
          <strong>Debounced API Calls:</strong> {debounceCount}
        </p>

        <p>
          <strong>Throttled Value:</strong> {throttledValue}
        </p>
        <p>
          <strong>Throttled API Calls:</strong> {throttleCount}
        </p>
      </div>
    </>
  );
};

export default DebounceAndThrottle;
```

### Explanation

- The input field updates immediately as the user types.
- Debounce triggers the API logic only after the user stops typing for a delay.
- Throttle triggers the API logic at fixed time intervals while typing.
- Separate counters show how many times each API call is triggered.
- `useMemo` ensures debounce and throttle functions are created only once.
- This keeps timers and closures stable across re-renders.
- The input value itself is not controlled, keeping typing smooth and responsive.

</details>
