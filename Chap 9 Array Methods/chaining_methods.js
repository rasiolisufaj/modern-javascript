const products = [
  { name: "gold star", price: 30 },
  { name: "green shells", price: 10 },
  { name: "red shells", price: 40 },
  { name: "banana skin", price: 5 },
  { name: "mushroom", price: 50 },
];

// const filtered = products.filter((product) => product.price > 20);

// const promos = filtered.map((product) => {
//   return `The ${product.name} price is ${product.price / 2} pounds`;
// });

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `The ${product.name} price is ${product.price / 2} pounds`);

console.log(promos);
