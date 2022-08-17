const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.youtube.com");
link.innerText = "YouTube";

const mssg = document.querySelector("p");

console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");

mssg.setAttribute(
  "style",
  "color: green; border: 1px solid red; padding: 10px;"
);
