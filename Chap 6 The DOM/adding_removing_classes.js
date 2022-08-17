// const content = document.querySelector("p");

// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

// NINJA CHALLENGE
/* some of p tags has the word error inside, and some others has 
the word success and others none..
Query all the elements and cycle through them, and give any tagg
the class of error where the error is inside, and any tagg the class of success where success is inside*/

const paras = document.querySelectorAll("p");
console.log(paras);

paras.forEach((para) => {
  if (para.innerText.includes("error")) {
    para.classList.add("error");
  } else if (para.textContent.includes("success")) {
    para.classList.add("success");
  }
});
