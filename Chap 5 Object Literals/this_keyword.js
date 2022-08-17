let user = {
  name: "crystal",
  age: 30,
  email: "crystal@hoteleu.co.uk",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make life easier"],
  login: function () {
    console.log("The user logged in");
  },
  logout: function () {
    console.log("The user logged out");
  },
  logBlogs: function () {
    // console.log(this.blogs);
    console.log("This user has written the following blogs:");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};

user.logBlogs();
console.log(this);
