const div = document.querySelector("div");

div.addEventListener("click", (e) => {
  // e.target.style.backgroundColor = "red";
  console.log("divListenerRun");
});

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  console.log("Button Clicked");
});
