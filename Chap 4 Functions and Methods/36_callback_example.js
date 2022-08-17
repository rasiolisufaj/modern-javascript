// get a reference to the 'ul'
const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "burce-lee"];

let html = ``;

people.forEach((person) => {
  // create HTML template for each perosn
  html += `<li style="color: aqua">${person}</li>`;
});

ul.innerHTML = html;
