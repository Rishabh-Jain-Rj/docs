# 📌 call, apply & bind — Quick Notes

`call`, `apply`, and `bind` are used to **control the value of `this`** inside a function.

> **Note:** New to the `this` keyword? Check out the quick guide in my docs.

---

## call()

- Invokes the function **immediately**
- Arguments are passed **one by one**

```js
function greet(city, state) {
  console.log(this.name, city, state);
}

const user = { name: "Rishabh" };

greet.call(user, "Gwalior", "MP"); // Rishabh Gwalior MP
```

## apply()

- Invokes the function **immediately**
- Arguments are passed as an **array**

```js
greet.apply(user, ["Gwalior", "MP"]); // Rishabh Gwalior MP
```

## bind()

- **Does not execute immediately**
- Returns a **new function** with `this` permanently bound
- Arguments can be **pre-passed individually (like `call`)**

```js
const boundGreet = greet.bind(user, "Gwalior", "MP");
boundGreet(); // Rishabh Gwalior MP
```

## Question

```js
function greet() {
  console.log(this.name);
}

const user = { name: "Rishabh" };
const otherUser = { name: "Other" };

const boundGreet = greet.bind(user);

boundGreet.call(otherUser);
```

<details> <summary>Show Output</summary>

```
Rishabh
```

### Explanation

- `bind()` creates a **new function** with `this` permanently bound to `user`
- Once bound, `call()` and `apply()` **cannot override** `this`
- Even though `call()` tries to set `this` to `otherUser`, it is ignored

### Key Rule

> **`bind` has higher priority than `call` and `apply`**

</details>
