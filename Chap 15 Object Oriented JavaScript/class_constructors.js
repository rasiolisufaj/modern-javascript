/*
Create a constructor function.

A constructor function is the thing that actually constructs our object and sets the properties on it.

ex. class User {
  constructor(){
    // set up properties
    this.username = 'mario';
  }
}

const userOne = new User(); => this calls the constructior function inside the User class and sets all the properties on this new object

// the 'new' keyword
  1- it creates a new empty object {}
  2- it binds the value of 'this' to the new empty object
  3- it calls the constructor function to 'build' the object inside the User() class [the new class]

*/

// ↓↓ We are creating unique objects using the constructor and passing in values → const userOne = new User("rasiol", "rasiol@gmail.com");

class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
  }
}

const userOne = new User("rasiol", "rasiol@gmail.com"); //We are creating an instance of the User class
const userTwo = new User("mario", "mario@gmail.com");
console.log(userOne, userTwo);

// The instance refers to the individual object that we actually create using the class
