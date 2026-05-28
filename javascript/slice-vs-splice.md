# 🟨 `slice()` vs `splice()`

| Method         | Mutates Original? | What it does                                                    |
| :------------- | :---------------- | :-------------------------------------------------------------- |
| **`slice()`**  | 🟢 NO (Safe)      | Returns a **copy** of a portion of the array.                   |
| **`splice()`** | 🛑 YES (Mutates)  | Adds, removes, or replaces items **directly inside** the array. |

---

## 🟢 `slice()`

```js
const pizza = ["crust", "cheese", "pepperoni"];

// Copy from index 1 to the end
const mySlice = pizza.slice(1);

console.log(mySlice); // ['cheese', 'pepperoni']
console.log(pizza); // ['crust', 'cheese', 'pepperoni'] (Untouched!)
```

---

## 🛑 `splice()`

```js
const months = ["Jan", "March", "April"];

// At index 1, remove 0 items, and insert 'Feb'
months.splice(1, 0, "Feb");

console.log(months); // ['Jan', 'Feb', 'March', 'April'] (Permanently changed!)
```

> **Pro Tip:** If you want to avoid weird bugs in modern React/Redux apps, always prefer `slice()` over `splice()` to avoid accidentally mutating your state!
