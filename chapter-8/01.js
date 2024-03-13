const sacha = {
  name: "Sacha",
  lastName: "Lifszyc",
  age: 28,
};

function isAdult(person) {
  let message;
  const ADULT_AGE = 18;

  if (person.age >= ADULT_AGE) {
    message = "Is adult";
  } else {
    message = "Is not adult";
  }
  console.log(message);
}

isAdult(sacha);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);
