const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
    const randomNumber = Math.floor(Math.random() * 900000 + 100000);
    const randomColor = "#" + randomNumber;
    ul.style.backgroundColor = randomColor;
  }
});

const randomNumber = Math.floor(Math.random() * 900000 + 100000);
const randomColor = "#" + randomNumber;
