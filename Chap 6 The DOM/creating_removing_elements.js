const ul = document.querySelector("ul");
// ul.remove();

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log("Event in LI");
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

const button = document.querySelector("button");

button.addEventListener("click", () => {
  // ul.innerHTML += "<li> something new </li>";
  const li = document.createElement("li");
  li.textContent = "something new";
  // ul.append(li);
  ul.prepend(li);
});

ul.addEventListener("click", (e) => {
  // console.log("Event in UL");
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
