// Async & Await

const getTodos = async () => {
  const resource = await fetch("todoss/luigi.json");

  if (resource.status !== 200) {
    throw new Error("Can not fetch the data");
  }

  const data = await resource.json();

  return data;
};

getTodos()
  .then((data) => console.log("Resolved:", data))
  .catch((error) => console.log("Rejected:", error.message));
