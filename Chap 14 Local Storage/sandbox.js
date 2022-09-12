// Store data in local storage
localStorage.setItem("name", "Rasiol");
localStorage.setItem("age", 21);
localStorage.setItem("education", "bachelor's degree");

// Retrieve data from local storage
let userName = localStorage.getItem("name");
let userAge = localStorage.getItem("age");
let userEducation = localStorage.getItem("education");

console.log(userName, userAge, userEducation);

// Update data
localStorage.setItem("name", "John");
userName = localStorage.getItem("name");
console.log(userName);
