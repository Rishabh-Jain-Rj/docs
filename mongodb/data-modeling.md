# 🟩 MongoDB Data Modeling (How to structure data)

In traditional SQL databases, you chop your data into many tables and glue it back together. In MongoDB, the golden rule is much simpler: **Data that is used together, should be stored together.**

When designing your database, you only have two main choices: **Embedding** (nesting data) or **Referencing** (linking data).

---

## 📦 1. Embedding (Nesting Data)

Instead of creating a new collection, you just put the related data directly inside the main document.

**Best for:** Data that belongs specifically to one thing, and small lists that won't grow endlessly.

```json
// Example: A user and their saved addresses
{
  "_id": "user_123",
  "name": "Rishabh",
  "addresses": [
    { "city": "Noida", "type": "Home" },
    { "city": "Gurgaon", "type": "Work" }
  ]
}
```

- **✅ Pros:** Blazing fast. You get the user and their addresses in one single trip to the database.
- **❌ Cons:** MongoDB has a 16MB limit per document. You can't embed an array that will grow forever (like millions of video comments).

---

## 🔗 2. Referencing (Linking Data)

You store data in separate collections, but link them using an ID (just like a Foreign Key in SQL).

**Best for:** Massive lists (like thousands of comments) or data that changes constantly.

```json
// Collection 1: Users
{
  "_id": "user_123",
  "name": "Rishabh",
  "postIds": ["post_88", "post_99"]
}

// Collection 2: Posts
{
  "_id": "post_88",
  "title": "Mastering Express",
  "authorId": "user_123"
}
```

- **✅ Pros:** Keeps your documents small, neat, and organized.
- **❌ Cons:** A little slower. It takes multiple database queries to fetch a user and all of their posts together.

---

## ⚡ The 3 Golden Rules of NoSQL

1. **Embed by default:** Unless you have a specific reason not to, nest your data. It keeps your code simple and fast.
2. **Beware the "Forever Array":** If a list could potentially grow forever (like system logs or millions of likes), **never** embed it. Link it instead.
3. **Design for your Screen:** In SQL, you design tables based on the data itself. In NoSQL, design based on _how your frontend app asks for the data_. If your webpage shows a user profile and recent orders on the exact same screen, store them together!
