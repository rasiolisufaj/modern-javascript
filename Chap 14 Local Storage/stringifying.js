const todos = [
  { morning: "buy bread", evening: "finish the project" },
  { morning: "visit grandparents", evening: "start the LS project" },
  { morning: "go gym", evening: "finish the LS project" },
];

localStorage.setItem("todos", JSON.stringify(todos));

// Turn it into array so we can work with the data
const storedItems = localStorage.getItem("todos");
console.log(JSON.parse(storedItems));
