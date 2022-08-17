// Exercise 1

// const displayMessage = () => "Hello World";
// console.log(displayMessage());

// Exercise 2

// const findSquare = (number) => number ** 2;
// const inputNumber = findSquare(8);
// console.log(inputNumber);

// Exercise 3

// const calFahrenheit = (celcius) => {
//   return `${celcius} Celcius = ${celcius * (9 / 5) + 32} Farenheit`;
// };

// const celciusToFarenheit = calFahrenheit(23);
// console.log(celciusToFarenheit);

// Exercise 4

// const rectangleArea = (width, length) => `Area: ${width * length} cm2`;

// const area = rectangleArea(3, 4);
// console.log(area);

// Exercise 5

// const circleValues = (radius) =>
//   `Circle area: ${3.14 * radius ** 2} \nCircle perimeter: ${2 * 3.14 * radius}`;

// const values = circleValues(5.3);
// console.log(values);

// Exercise 6

// const reverseNum = (number) => {
//   return number.toString().split("").reverse().join("");
// };
// const reversed = reverseNum(1563);
// console.log(reversed);

// Exercise 7

// const countVowel = (string) => {
//   let numberOfVowels = 0;
//   let vowel = ["i", "u", "a", "e", "o", "y"];
//   for (let i = 0; i < string.length; i++) {
//     for (let j = 0; j < vowel.length; j++) {
//       if (string[i] == vowel[j]) {
//         numberOfVowels++;
//       }
//     }
//   }
//   return numberOfVowels;
// };

// const vowelsInString = countVowel("eklid");
// console.log(vowelsInString);

// Exercise 8

// const flattenArr = (array) => {
//   return array.flat();
// };

// const flat2DArray = flattenArr([1, 2, 3, [4, 5, 6], [7, 5, 9]]);
// console.log(flat2DArray);

// Exercise 9
// const checkPalindrome = (string) => {
//   return string.split("").reverse().join("") == string;
// };

// const palindromeString = checkPalindrome("MADAM");
// console.log(palindromeString);

// Exercise 10
// const simpleInt = (principal, rateInterest, time) => {
//   return principal * (1 + rateInterest * time);
// };

// const totalSimpleInt = simpleInt(1200, 0.15, 3);
// console.log(totalSimpleInt);

// Exercise 11
// const compoundInt = (
//   principal,
//   interestRate,
//   numberOfTimesApplied,
//   numberOfTimePeriods
// ) => {
//   return (
//     principal *
//     (1 + interestRate / numberOfTimesApplied) ** numberOfTimesApplied *
//     numberOfTimePeriods
//   );
// };

// const compuoundInterest = compoundInt(2000, 0.006, 365, 0.5).toFixed(2);
// console.log(compuoundInterest);

// Exercise 12
// const getRandom = (startRange, endRange) => {
//   return Math.floor(Math.random() * endRange + startRange);
// };

// const randomNumber = getRandom(2, 69);
// console.log(randomNumber);

// Exercise 13

// const getFactorial = (number) => {
//   if (number == 1) {
//     return 1;
//   }
//   if (number == 0 || number < 0) {
//     return 0;
//   }
//   return number * getFactorial(number - 1);
// };

// const factorial = getFactorial(5);
// console.log(factorial);

// Exercise 14

// const addNumber = (number) => {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };

// const total = addNumber(10);
// console.log(total);

// Excercise 15

// --------------|||----------------

// Excercise 16

// const letterCount = (string) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].charAt(string[i]) == "a") {
//       count++;
//     }
//   }
//   return count;
// };

// const counting = letterCount("rasiolabcdeaf");
// console.log(counting);

// Exercise 17

const checkPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};

const isPrime = checkPrime(7);
console.log(isPrime);
