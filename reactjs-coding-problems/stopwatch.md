# ⏱ React Stopwatch

## 📌 Problem Statement

Create a Stopwatch component in React with the following features:

- **Start** → begins the timer.
- **Stop** → pauses the timer.
- **Reset** → resets the timer to `00:00:00`.
- **Display** → shows time in `HH:MM:SS` format.
- **Prevent Overlap** → prevents multiple intervals from running at the same time.
- **State Management** → uses proper React hooks to manage timer state.

_This problem focuses on timers, state updates, and time formatting._

<details>
<summary><strong>Click to view solution</strong></summary>

```jsx
import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  const hrs = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <div>
      <h1>Stop Watch</h1>

      <h2>{`${hrs}:${minutes}:${secs}`}</h2>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
```

### 📝 Explanation

#### 🔄 Interval Logic & `useRef`

To make the stopwatch tick, we use JavaScript's `setInterval`. However, managing this interval in React requires specific hooks:

- **Why `useRef`?** We store the interval ID in `intervalRef.current`. Unlike `useState`, updating a `useRef` value does _not_ trigger a component re-render. We only want the component to re-render when the `seconds` change, not when we save the interval ID behind the scenes.
- **Preventing Overlap:** Inside `handleStart`, the condition `if (intervalRef.current) return;` acts as a guard. If the timer is already running and the user clicks "Start" multiple times, this prevents creating overlapping intervals (which would make the timer run too fast).
- **Clearing the Interval:** Inside `handleStop` and `handleReset`, we use `clearInterval(intervalRef.current)`. This completely stops the ticking process. It is crucial to clear intervals so they don't keep running in the background indefinitely and cause memory leaks.

#### ⏱ State

`seconds` stores the total elapsed time in seconds.
_Example:_ `0 → 1 → 2 → 3 → ... → 65 → 66`

#### 🧮 Converting Seconds → HH:MM:SS

The timer stores total seconds, so we mathematically extract each part.

**Hours**

```javascript
hrs = Math.floor(seconds / 3600);
```

_Because: `1 hour = 3600 seconds`_

**Minutes**

```javascript
minutes = Math.floor((seconds % 3600) / 60);
```

_`% 3600` removes full hours and leaves only the remaining seconds._

**Seconds**

```javascript
secs = seconds % 60;
```

_This gives the remaining seconds after removing full minutes._
_(Example: `65 % 60 = 5`)_

---

#### 🔍 Example Walkthrough

If `seconds = 3665`

**Breakdown:**

- `hrs = 1`
- `minutes = 1`
- `secs = 5`

**Display:** `01 : 01 : 05`

---

### 💡 Key Idea

- **Division (`/`)** → gives the unit.
- **Modulus (`%`)** → gives the remainder.

```javascript
hours   → Math.floor(seconds / 3600)
minutes → Math.floor((seconds % 3600) / 60)
seconds → seconds % 60
```

</details>
