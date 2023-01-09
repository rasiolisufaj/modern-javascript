/*
Create a constructor function.

A constructor function is the thing that actually constructs our object and sets the properties on it.

ex. class User {
  constructor(){
    // set up properties
    this.username = 'mario';
  }
}

const userOne = new User(); => this calls the constructor function inside the User class and sets all the properties on this new object

// the 'new' keyword
  1- it creates a new empty object {}
  2- it binds the value of 'this' to the new empty object
  3- it calls the constructor function to 'build' the object inside the User() class [the new class]

*/

// ↓↓ We are creating unique objects using the constructor and passing in values → const userOne = new User("rasiol", "rasiol@gmail.com");

class User {
  constructor(username, email, age) {
    this.username = username;
    this.email = email;
    this.age = age;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
}

const userOne = new User("Jack01", "jack@gmail.com", 22);
const userTwo = new User("jack11", "jack11@gmail.com", 23);
const userThree = new User("jack22", "jack22@gmail.com", 24);
console.log(userOne, userTwo, userThree);
userTwo.login().logout();
