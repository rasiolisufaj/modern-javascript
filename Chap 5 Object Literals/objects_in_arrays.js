// Object in arrays

// const blogs = [
//   { title: "why mac & cheese rules", likes: 30 },
//   { title: "10 things to make life easier", likes: 56 },
// ];

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@hoteleu.co.uk",
  location: "berlin",
  blogs: [
    { title: "why mac & cheese rules", likes: 30 },
    { title: "10 things to make life easier", likes: 56 },
  ],
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
      console.log(blog.title, blog.likes);
    });
  },
};

user.logBlogs();
