# 🟨 Garbage Collector

The garbage collector automatically frees memory by removing objects that are **no longer reachable**.

> Objects remain in memory as long as they are referenced.

> Once all references are removed, the object becomes eligible for garbage collection.

### Example

```js
let user = { name: "Rishabh" };

user = null;
```

### 🔍 Explanation

- The object was initially referenced by `user`
- Setting `user` to `null` removes the reference
- The object becomes unreachable
- Garbage Collector frees the memory
