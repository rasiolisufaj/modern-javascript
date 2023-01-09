console.log(1);
console.log(2);

setTimeout(() => {
  console.log("Callback function fired");
}, 2000);

console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(6);
console.log(6);
console.log(6);
console.log(6);
console.log(6);
console.log(6);
console.log(6);
setTimeout(() => {
  console.log("Before callback function fired");
}, 1000);
console.log(6);
console.log(6);
console.log(6);
console.log(6);
