fetch("todos/luigi.json")
  .then((response) => {
    console.log("Resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log("Response: ", data);
  })
  .catch((error) => {
    console.log("Rejected", error);
  });
