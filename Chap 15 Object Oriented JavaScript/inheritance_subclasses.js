// extend from the class ==> means inherit from the class

// STRUCTURE ↓↓↓

// class User {
//   constructor(){
//     ... ...arguments
//   }
//   method()
//   method()
//   method()
// }

// class Admin extends User{
//   ...
// }

// Let's say we have an array of users and we want to delete a user,
// Only the admin can have the permit to delete users

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`User ${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`User ${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 2;
    console.log(`User ${this.username} has ${this.score} scores`);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      if (user !== u) {
        return true;
      } else {
        console.log(`User ${u.username} deleted!`);
      }
    });
  }
}

const userOne = new User("rasiol", "rasiol@email.com");
const userTwo = new User("eklid", "eklid@email.com");
const userThree = new User("jimmy", "jimmy@email.com");
const admin = new Admin("Klement", "klement@gmail.com");

let users = [userOne, userTwo, userThree];
admin.deleteUser(userOne);

console.log(users);
