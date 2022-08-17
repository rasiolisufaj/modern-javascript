// testing RegEx
const username = "1235@[]rasiol5";
const pattern = /[a-z]{6,}$/;

let result = pattern.test(username);

// if (result) {
//   console.log("RegEx test passed :)");
// } else {
//   console.log("RegEx test failed :(");
// }

// let result = username.search(pattern);

console.log(result);
