const sacha = {
  name: "Sacha",
  lastName: "Lifszyc",
  height: 1.72,
};

const alan = {
  name: "Alan",
  lastName: "Perez",
  height: 1.86,
};

const martin = {
  name: "Martin",
  lastName: "Gomez",
  height: 1.85,
};

const dario = {
  name: "Dario",
  lastName: "Juarez",
  height: 1.71,
};

const vicky = {
  name: "Vicky",
  lastName: "Zapata",
  height: 1.56,
};

const paula = {
  name: "Paula",
  lastName: "Barros",
  height: 1.76,
};

const people = [sacha, alan, martin, dario, vicky, paula];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(`${person.name} is ${person.height}m tall`);
}
