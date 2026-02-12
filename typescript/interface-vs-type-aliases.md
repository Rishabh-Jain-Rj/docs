# 🟦 Interface vs Type Alias

Both **Interface** and **Type Alias** are used to define types in TypeScript.  
They are similar in many cases but have some important differences.

---

### 🔹 Basic Difference

| Interface                                           | Type Alias                                             |
| --------------------------------------------------- | ------------------------------------------------------ |
| Mainly used to define object structure              | Can define objects, primitives, unions, and more       |
| Supports declaration merging                        | Does not support declaration merging                   |
| Can extend other interfaces using `extends`         | Can combine types using `&` (intersection)             |
| Commonly used for object structures and React props | Commonly used for unions and complex type combinations |

---

## 📌 Summary

- Use **Interface** mainly for defining object structures
- Use **Type Alias** for flexible and advanced type combinations
- Both are widely used and important in TypeScript
