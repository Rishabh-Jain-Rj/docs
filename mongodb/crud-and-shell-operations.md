# 🟩 MongoDB Core CRUD & Shell Operations

Once you are connected to MongoDB (via `mongosh` or Compass), you interact with your collections using CRUD operations: Create, Read, Update, and Delete.

---

## 📝 1. Create (Insert Data)

MongoDB creates a collection automatically the very first time you insert data into it. No table setup required!

```javascript
// Insert a single document
db.users.insertOne({ name: "Rishabh", age: 25, role: "Developer" });

// Insert multiple documents at once (pass an array)
db.users.insertMany([
  { name: "John", age: 30 },
  { name: "Jane", age: 22 },
]);
```

---

## 🔎 2. Read (Find Data)

```javascript
// Get ALL documents in a collection
db.users.find();

// Find documents matching a condition (e.g., age is exactly 25)
db.users.find({ age: 25 });

// Find only the FIRST document that matches
db.users.findOne({ name: "Rishabh" });
```

---

## ✏️ 3. Update (Modify Data)

When updating, you need two things: a **filter** (who to update) and an **update operator** (how to change it).

**Essential Modifiers:**

- `$set`: Changes a value or adds a completely new field.
- `$inc`: Increases (or decreases) a number.
- `$push`: Adds an item to an array.
- `$pull`: Removes an item from an array.

```javascript
// Change role to Admin and increase age by 1
db.users.updateOne(
  { name: "Rishabh" }, // The filter
  { $set: { role: "Admin" }, $inc: { age: 1 } }, // The update operators
);

// Add "Node.js" to the skills array
db.users.updateOne({ name: "Rishabh" }, { $push: { skills: "Node.js" } });

// Remove "Java" from the skills array
db.users.updateOne({ name: "Rishabh" }, { $pull: { skills: "Java" } });
```

---

## 🗑️ 4. Delete (Remove Data)

```javascript
// Delete the first user named John
db.users.deleteOne({ name: "John" });

// Delete ALL users who are under 18
db.users.deleteMany({ age: { $lt: 18 } });
```

---

## 🛠️ 5. Query & Logical Operators

Instead of exact matches, you will often need to find ranges or combine multiple conditions.

| Operator   | Meaning                | Example                                              |
| :--------- | :--------------------- | :--------------------------------------------------- |
| **`$eq`**  | Equal to               | `{ age: { $eq: 25 } }`                               |
| **`$gt`**  | Greater than           | `{ age: { $gt: 18 } }`                               |
| **`$lt`**  | Less than              | `{ age: { $lt: 30 } }`                               |
| **`$in`**  | Inside an array        | `{ role: { $in: ["Admin", "Editor"] } }`             |
| **`$or`**  | Matches ANY condition  | `{ $or: [{ age: 25 }, { role: "Admin" }] }`          |
| **`$and`** | Matches ALL conditions | `{ $and: [{ age: { $gt: 18 } }, { active: true }] }` |

---

## ⚡ 6. Query Tuning (Projections & Pagination)

When dealing with massive databases, you should never fetch more data than you actually need.

### A. Projections (Select specific fields)

Pass a second object to `.find()`. Use `1` to include a field, and `0` to exclude it.

```javascript
// Fetch all users, but ONLY return their name and role. Ignore the ID.
db.users.find({}, { name: 1, role: 1, _id: 0 });
```

### B. Pagination (Sort, Skip, Limit)

If you have 10,000 users, you probably only want to show 10 at a time on a web page.

```javascript
// 1. Sort by age descending (-1) or ascending (1)
// 2. Skip the first 10 results (skip Page 1)
// 3. Limit the output to only 5 results
db.users.find().sort({ age: -1 }).skip(10).limit(5);
```
