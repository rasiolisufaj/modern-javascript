// const copy = document.querySelector(".copy-me");

// copy.addEventListener("copy", () => {
//   console.log("Oops! My content is copyright!");
// });

const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  // console.log(e);
  // console.log(`X: ${e.offsetX}, Y: ${e.offsetY}`);
  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
});
