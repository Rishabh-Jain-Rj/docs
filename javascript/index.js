const obj = { name: "rishabh", age: 20, others: {} };
Object.seal(obj);
obj.name = "new name";
obj.others.favColor = "blue";
console.log(obj);
