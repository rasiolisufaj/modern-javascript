const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const arrayOfObjects = JSON.parse(request.responseText);
      callback(undefined, arrayOfObjects);
    } else if (request.readyState === 4) {
      callback("Could not get the data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

getTodos("todos/luigi.json", (error, data) => {
  console.log(data);
  getTodos("todos/mario.json", (error, data) => {
    console.log(data);
    getTodos("todos/shaun.json", (error, data) => {
      console.log(data);
    });
  });
});

// NOT EFFECTIVE!
