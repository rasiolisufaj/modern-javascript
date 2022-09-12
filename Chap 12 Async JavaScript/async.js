// Async & Await

const getTodos = async () => {
  //Thread 1
  const resource = await fetch("todoss/luigi.json"); //Thread 2 + block Thread 1

  if (resource.status !== 200) {
    //Thread 1
    throw new Error("Can not fetch the data"); //Thread 1
  }

  const data = await resource.json(); //Thread 2 + block thread 1

  return data; //Thread 1
};

getTodos() //Thread 0
  .then((data) => console.log("Resolved:", data))
  .catch((error) => console.log("Rejected:", error.message));
