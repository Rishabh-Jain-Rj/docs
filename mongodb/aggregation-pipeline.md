# 🟩 MongoDB Aggregation Pipeline (The Assembly Line)

If `.find()` is like picking an item off a shelf, the **Aggregation Pipeline** is like a factory assembly line.

You pass your data through a series of "stages". Each stage transforms the data (filters it, groups it, calculates totals) and passes the result to the exact next stage.

**Basic Syntax:**

```javascript
// It takes an array of stages
db.orders.aggregate([{ stage1 }, { stage2 }, { stage3 }]);
```

---

## 🏭 The 5 Most Important Stages

### 1. `$match` (The Filter)

Acts exactly like `.find()`. It filters the documents. **Rule of thumb:** Always put `$match` as early in your pipeline as possible to reduce the amount of data moving forward.

```javascript
{
  $match: {
    status: "completed";
  }
}
```

### 2. `$group` (The Calculator)

Groups documents together based on a specific `_id` you define, and lets you perform calculations (like sum, average, or count).

```javascript
{
  $group: {
    _id: "$customerId", // Group by the customer ID
    totalSpent: { $sum: "$price" } // Add up the price of their orders
  }
}
```

### 3. `$sort` (The Organizer)

Sorts the data. `1` is ascending (A-Z, 0-9), and `-1` is descending (Z-A, 9-0).

```javascript
{
  $sort: {
    totalSpent: -1;
  }
} // Sort by highest spenders first
```

### 4. `$project` (The Reshaper)

Lets you include, exclude, or create completely new fields in the final output.

```javascript
{
  $project: {
    _id: 0, // Hide the original ID
    customerName: 1, // Keep the name
    summary: "High Value Customer" // Create a brand new static field
  }
}
```

### 5. `$lookup` (The NoSQL JOIN)

Fetches related data from a completely different collection (combines them).

```javascript
{
  $lookup: {
    from: "users",         // Which collection to join?
    localField: "userId",  // The ID in the current collection
    foreignField: "_id",   // The matching ID in the 'users' collection
    as: "userDetails"      // What to name the new array containing the joined data
  }
}
```

---

## ⚡ Real World Example

Let's find the top 3 highest-spending users from New York. Notice how the data flows from one stage to the next.

```javascript
db.orders.aggregate([
  // Step 1: Only grab orders from NY
  { $match: { state: "NY" } },

  // Step 2: Group them by User ID and add up their total spend
  { $group: { _id: "$userId", totalSpend: { $sum: "$amount" } } },

  // Step 3: Sort by the new 'totalSpend' field (Highest first)
  { $sort: { totalSpend: -1 } },

  // Step 4: Only keep the top 3 results
  { $limit: 3 },
]);
```

---

## 🧰 Cheat Sheet: Other Common Stages

| Stage         | What it does               | Example Use Case                                                          |
| :------------ | :------------------------- | :------------------------------------------------------------------------ |
| **`$limit`**  | Caps the number of results | `{ $limit: 10 }` (Top 10 leaderboard)                                     |
| **`$skip`**   | Skips a number of results  | `{ $skip: 20 }` (For Page 3 of pagination)                                |
| **`$unwind`** | Deconstructs an array      | Turns a document with 3 tags into 3 separate documents, one for each tag. |
| **`$count`**  | Counts the documents       | `{ $count: "totalOrders" }`                                               |
