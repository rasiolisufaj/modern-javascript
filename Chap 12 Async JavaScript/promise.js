// // Promise Example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Data Success");
//     // reject("Error");
//   });
// };

// getSomething()
//   .then((resolvedPromise) => {
//     console.log(resolvedPromise);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

// getTodos("todos.json")
//   .then((data) => {
//     console.log("Promise resolved: ", data);
//   })
//   .catch((error) => {
//     console.log("Promise rejected: ", error);
//   });

// CHAINING PROMISES
getTodos("todos/luigi.json")
  .then((data) => {
    console.log("Promise 1 resolved:", data);
    return getTodos("todos/mario.json");
  })
  .then((data) => {
    console.log("Promise 2 resolved:", data);
    return getTodos("todos/shaun.json");
  })
  .then((data) => {
    console.log("Promise 3 resolved:", data);
  })
  .catch((error) => {
    console.log("Promise rejected: ", error);
  });
