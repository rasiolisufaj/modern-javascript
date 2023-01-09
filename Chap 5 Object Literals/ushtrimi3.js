const numbersArray = [2, 4, 4, 5, 2, 3, 3, 4, 5, 6, 6, 6, 1];

let modeCount = new Array(numbersArray.length).fill(0);

for (let i = 0; i < numbersArray.length; i++) {
  const element = numbersArray[i];
  modeCount[element]++;
  // console.log(element);
  console.log(modeCount);
}

// console.log(modeCount.indexOf(Math.max(...modeCount)));
