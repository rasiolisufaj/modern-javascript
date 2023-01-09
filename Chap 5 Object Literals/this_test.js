const user = {
  username: "jack069",
  password: "01020355",
  firstName: "Jack",
  lastName: "Bogotta",
  courses: ["Modern JS", "React", "HTML & CSS", "French Language", "Maths"],
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
  coursesAttended() {
    console.log(`User: ${this.username} has attended the following courses: `);
    return this.courses.forEach((course) => console.log(course));
  },
};

console.log(user.getFullName());
console.log(user.coursesAttended());
