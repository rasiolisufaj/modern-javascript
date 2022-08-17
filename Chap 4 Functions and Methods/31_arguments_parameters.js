// arguments & parameters

const speak = function (name = "luigi", time = "night") {
  console.log(`Good ${time} ${name}`);
};

speak("Jack", "morning");
