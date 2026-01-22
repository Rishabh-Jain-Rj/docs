# 🟨 JavaScript Theory Questions

This file contains **JavaScript theory based questions** commonly asked in interviews.  
These questions focus on **understanding concepts**, not predicting output.

---

## Question 1

What is the difference between `if...else` and the ternary (`?:`) operator?

<details>
  <summary><strong>Show Answer</strong></summary>

| `if...else`                      | Ternary Operator (`?:`)             |
| -------------------------------- | ----------------------------------- |
| It is a statement                | It is an expression                 |
| Used for multiple lines of logic | Used for simple one-line conditions |
| Easier to read for complex logic | Best for short and simple checks    |
| Does not return a value          | Returns a value                     |
| Written as a block               | Written in a single line            |

> **Note:**  
> A **statement** runs code but does not give a value.  
> An **expression** gives a value.

</details>

## Question 2

What is the difference between a function declaration and a function expression?

<details>
  <summary><strong>Show Answer</strong></summary>

| Function Declaration                                            | Function Expression                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------- |
| Defined using `function` keyword                                | Assigned to a variable                                              |
| Hoisted (can be called before definition)                       | Not hoisted like a declaration                                      |
| Must have a function name                                       | Can be anonymous                                                    |
| **Example:**<br>`function sayHello() { console.log("Hello"); }` | **Example:**<br>`const sayHi = function () { console.log("Hi"); };` |

</details>
