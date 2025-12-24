const complexObj = {
  id: 101,
  name: "Product A",
  price: 999,
  createdAt: new Date(),
  tags: ["electronics", "sale"],
  meta: {
    stock: 20,
    rating: 4.5,
  },
  discount: undefined,
};

const cloned1 = JSON.parse(JSON.stringify(complexObj));
const cloned2 = structuredClone(complexObj);
console.log(complexObj, "complexObj");
