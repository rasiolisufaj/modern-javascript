// Create date object

// const now = new Date();
// let val = now.getFullYear();
// val = now.getMonth();
// val = now.getDate();
// val = now.getDay();
// val = now.getHours();
// val = now.getMinutes();
// val = now.getSeconds();
// val = now.getTime();
// val = now.toDateString();
// val = now.toTimeString();
// val = now.toLocaleString();
// console.log(val);

// Time stamps  Comparisons
// const before = new Date("July 26 2022 10:39:30");
// const now = new Date();
// let difference = now.getTime() - before.getTime();
// const mins = Math.round(difference / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(`The blog was written ${days} days before`);

// Building a Digital Clock
const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  insertHTML(hours, minutes, seconds);
};

const insertHTML = (h, m, s) => {
  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = "0" + m;
  }
  const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
  `;
  clock.innerHTML = html;
};

setInterval(tick, 1000);
