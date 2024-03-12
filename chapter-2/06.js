const sacha = {
  name: "Sacha",
  lastName: "Lifszyc",
  age: 28,
};

const dario = {
  name: "Dario",
  lastName: "Susnisky",
  age: 27,
};

const nombre = "Sacha";

function printNameInUpperCase({ name }) {
  console.log(name.toUpperCase());
}

printNameInUpperCase(sacha); // SACHA
