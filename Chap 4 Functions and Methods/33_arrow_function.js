// regular function
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// arrow function
// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };

// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log("Area is:", area);

// practice arrow functions

// const greet = function () {
//   return "hello, world";
// };

// const greet = () => "hello, world";
// const greeting = greet();
// console.log(greeting);

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

const bills = bill([10, 20, 26], 0.15);
console.log(bills);
