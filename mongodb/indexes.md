# 🟩 MongoDB Indexes (Speeding up Queries)

Imagine you have 100,000 users in your database, and someone tries to log in with `rishabh@example.com`.

- **Without an index (The Slow Way):** MongoDB doesn't know where Rishabh's profile is. It starts at user #1 and reads every single profile one by one until it finds that exact email. This is called a **Collection Scan**.
- **With an index (The Fast Way):** MongoDB keeps a separate, perfectly alphabetical "cheat sheet" of just the emails. It skips straight to the "R" section, finds `rishabh@example.com` instantly, and sees a pointer telling it exactly where the full profile is saved. This is an **Index Scan**, and it takes milliseconds.

---

## 🎯 1. Which fields SHOULD you index?

You should not index everything. You only want to index the fields your app uses to search, sort, or filter.

- **Search/Login Fields:** Fields users type in to find things (e.g., `email`, `username`).
- **Sorting Fields:** If your app always shows "Newest Posts", put an index on `createdAt` so the database doesn't have to manually sort 10,000 posts every time the page loads.
- **Must-Be-Unique Fields:** If you want to absolutely guarantee no two people use the same phone number.

---

## 🛑 2. Which fields should you NOT index?

If indexes make your app faster, why not index every single field?
Because **every time you create, update, or delete a user, MongoDB has to update the index cheat sheet too.** \* ✅ **Reads are faster:** Searching is instant.

- ❌ **Writes are slower:** Saving data takes longer.
- **Do NOT index:** Fields you rarely search for (like `favoriteColor`), fields with very few options (like an `isActive` boolean that is only true/false), or data that changes constantly (like a `liveViewCount`).

---

## 🚀 3. How to Create Indexes

You create an index by telling MongoDB which field to track. Use `1` for alphabetical/ascending order, and `-1` for descending order.

### Single Field Index

Best when you frequently search by one specific thing.

```javascript
// Speeds up searches like: db.users.findOne({ email: "rishabh@example.com" })
db.users.createIndex({ email: 1 });
```

### Compound Index

Best when your app searches for two things at the exact same time.

```javascript
// Speeds up searches like: db.users.find({ role: "Admin", age: 30 })
db.users.createIndex({ role: 1, age: -1 });
```

### Unique Index

Forces the database to reject a document if someone else already has this exact value.

```javascript
// Prevents two users from registering with the exact same email
db.users.createIndex({ email: 1 }, { unique: true });
```

---

## 🕵️ 4. How to check if your index is working

You can attach `.explain("executionStats")` to the end of any search to see exactly what MongoDB did behind the scenes.

```javascript
db.users.find({ email: "rishabh@example.com" }).explain("executionStats");
```

**Look at the output for `totalDocsExamined`:**

- If you have 10,000 users and it examined **10,000 docs**, your index failed (Collection Scan).
- If it examined **1 doc**, your index worked perfectly (Index Scan)!
