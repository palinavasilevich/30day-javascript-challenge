const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello, I'm a %s string!", "Palina");

// Styled
console.log(
  "%c I'm some great text",
  "font-size: 50px; background: green; text-shadow: 10px 10px 0 blue"
);

// warning!
console.warn("OH NOOO!!!");

// Error :|
console.error("Error!!!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "That's wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This's ${dog.name}`);
  console.log(`${dog.name} ist ${dog.age} years old`);
  console.log(`${dog.name} ist ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Palina");
console.count("Palina");
console.count("Alex");
console.count("Palina");
console.count("Alex");
console.count("Palina");
console.count("Alex");
console.count("Palina");
console.count("Palina");
console.count("Alex");
console.count("Alex");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/palinavasilevich")
  .then((res) => res.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table
console.table(dogs);
