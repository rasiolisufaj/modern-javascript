const products = [
  { name: "Apple", price: 1200 },
  { name: "Samsung", price: 1000 },
  { name: "Asus", price: 1100 },
  { name: "MSI", price: 1300 },
];

const discount = products
  .filter((product) => product.price > 1000)
  .sort((a, b) => a.price - b.price)
  .map(
    (product) => `Discount on ${product.name}, BUY NOW ${product.price * 0.8}$`
  );

console.log(discount);
