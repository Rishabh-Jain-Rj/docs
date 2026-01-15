# 🟨 Array vs Object in JavaScript

## Array

An **Array** is used to store **ordered data (lists)**.

- Data is accessed using **index numbers**
- Order of elements **matters**
- Best for collections and lists

```js
const arr = ["apple", "banana", "mango"];
```

## Object

An **Object** is used to store **structured data** as **key–value pairs**.

- Data is accessed using **named keys**
- Order is **not important**
- Best for representing **entities**

```js
const user = {
  name: "Rishabh",
  age: 24,
};
```

## Key Differences

| Feature          | Array                                    | Object                          |
| ---------------- | ---------------------------------------- | ------------------------------- |
| Purpose          | Store ordered list of values             | Store structured key–value data |
| Data Access      | By index (`arr[0]`)                      | By key (`obj.key`)              |
| Order            | Important and preserved                  | Not important                   |
| Keys             | Numeric indexes (0, 1, 2…)               | String or Symbol keys           |
| Built-in Methods | Many (`map`, `filter`, `reduce`, `push`) | None for direct                 |

## Important Note

> Arrays are a special type of object in JavaScript with extra behavior for ordered data.
