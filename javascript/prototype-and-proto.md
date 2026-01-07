# 📌 Prototype and **proto** in JavaScript

## Prototype

**`prototype`** is a common place where shared behavior is defined so it is not duplicated for every object.

## proto

**`__proto__`** is an internal reference present on every JavaScript object that points to the object’s prototype.

It is used by JavaScript to look up properties and methods when they are not found directly on the object.

## Example 1 (string example)

JavaScript strings are primitive values, but they can access methods because of the **prototype system**.

```js
const name = "Rishabh";
name.toUpperCase(); // "RISHABH"
```

### How `toUpperCase()` Works in JavaScript

The `toUpperCase()` method isn’t defined directly on the string value itself.  
Instead, every string in JavaScript is internally linked to `String.prototype`,  
which holds all the shared string methods like `toUpperCase()`.

### 🔗 Prototype Link

When you call a method on a string, JavaScript follows this prototype chain:

```js
"Rishabh" → String.prototype → Object.prototype → null
```

> A string is a primitive value, but JavaScript links it to `String.prototype` via `__proto__`, so it can access methods.

## Example 2: Assign one object as another object’s prototype

### Step 1: Create a base object (prototype)

```js
const baseUser = {
  greet() {
    return "Hello!";
  },
};
```

### Step 2: Create a new object using `baseUser` as prototype

```js
const user = Object.create(baseUser);
```

### Step 3: Use the inherited method

```js
user.greet(); // "Hello!"
```

**What happened internally**

```js
user.__proto__ === baseUser; // true
```

**Lookup flow:**

```js
user → baseUser → Object.prototype → null
```

> An object can inherit another object’s properties by setting it as its prototype using Object.create().
