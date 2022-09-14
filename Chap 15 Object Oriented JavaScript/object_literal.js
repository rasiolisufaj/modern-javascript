// Object literal notation
/* create a new object userOne,, set properties username, email, set a login method that says user logged in
set a logout method that says user logged out
call one of the methods

create a new object userTwo,, with the same properties

the problem is that we are rewriting the same code again and again when we want to create new users.
NOT EFFICIENT

SO THE BEST WAY TO DO THIS IS TO  CREATE A USER CONSTRUCTOR -> THE USE OF OBJECT ORIENTED PROGRAMMING

*/

const userOne = {
  username: "rasiol",
  email: "rasiol@gmail.com",
  logIn() {
    console.log("The user logged in");
  },
  logOut() {
    console.log("The user logged out");
  },
};

console.log(userOne.username, userOne.email);
userOne.logIn();

const userTwo = {
  username: "Andrew",
  email: "andrew@gmail.com",
  logIn() {
    console.log("The user logged in");
  },
  logOut() {
    console.log("The user logged out");
  },
};
console.log(userTwo.username, userTwo.email);

const userThree = new User("mario@theplayboy.co.uk", "mario");
