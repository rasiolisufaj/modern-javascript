const scores = [20, 10, 30, 25, 15, 40, 80, 5];

const filteredScores = scores.filter((score) => score > 20);
console.log(filteredScores);

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);
