# 📌 What is a Closure?

A **closure** is created when a function remembers variables from its lexical scope
and can access them later, even after the outer function has finished executing.

> A closure keeps a **live reference** to variables, not a copy.

> **Lexical scope** means JavaScript resolves variables based on where a function is **defined**, not where it is **called**.

When a function tries to access a variable, JavaScript looks:

1. In the function’s own local scope
2. Then in its outer (parent) scopes
3. Then in the global scope (if not found earlier)
4. It **never checks** the scope from where the function is called.

## Example – Lexical Scope

```js
let x = 10;

function foo() {
  console.log(x);
}

function bar() {
  let x = 20;
  foo();
}

x = 20;
bar();
```

<details> <summary> Show Output</summary>

```
20
```

**Explanation**

- `foo()` is defined in the **global scope**
- When a function is defined, JavaScript records its **lexical scope**
- JavaScript does **not copy the value** of `x` into `foo()`
- When `foo()` executes, it **resolves `x` from its lexical (global) scope**,  
  using the **current value** of `x`

</details>
