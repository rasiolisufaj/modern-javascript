// Variables & Block scope
let age = 30;

// let age = 50;

if (true) {
  let age = 40;
  let name = "shaun";
  console.log("Inside 1st code block: ", age, name);

  if (true) {
    let age = 50;
    console.log("Inside 2nd code block: ", age);
  }
}

console.log("Outside code block: ", age, name);

// same as with const
