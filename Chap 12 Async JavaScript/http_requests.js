// Making HTTP Requests XHR
const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const arrayOfObjects = JSON.parse(request.responseText);
      callback(undefined, arrayOfObjects);
    } else if (request.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });

  // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET", "todos.json");

  request.send();
};

console.log(1);
console.log(2);
console.log(3);

getTodos((err, data) => {
  console.log("Callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(4);
console.log(5);
