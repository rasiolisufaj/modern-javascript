console.log(Math);
console.log(Math.PI);

let area = 7.7;

console.log(Math.round(area));

// random numbers

// const random = Math.floor(Math.random() * 100 + 1);
let count = 0;
for (let i = 0; i < 100; i++) {
  const random = Math.floor(Math.random() * 100 + 1);
  console.log(random);
  if (random == 69) {
    count++;
  }
}
console.log(count);
