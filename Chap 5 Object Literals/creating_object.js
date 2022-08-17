// Object literals

// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@hoteleu.co.uk",
//   location: "berlin",
//   blogs: ["why mac & cheese rules", ["10 things to make life easier"]],
// };

// console.log(user);
// console.log(user.name);

// // user.age = 40;
// console.log(user.age);

// console.log(user["email"]);
// user["name"] = "Jack";
// console.log(user["name"]);

// typeof

// console.log(typeof user);
// ------------------------------------------
// Adding Methods

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@hoteleu.co.uk",
  location: "berlin",
  blogs: ["why mac & cheese rules", ["10 things to make life easier"]],
  login: function () {
    console.log("The user logged in");
  },
  logout: function () {
    console.log("The user logged out");
  },
  logBlogs: function () {},
};

user.login();
user.logout();

const name = "Mario";
