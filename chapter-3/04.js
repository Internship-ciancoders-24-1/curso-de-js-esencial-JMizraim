const sacha = {
  name: "Sacha",
  lastName: "Lifszyc",
  age: 28,
  weight: 75,
};

console.log(
  `At the beginning of the year ${sacha.name} weighs ${sacha.weight}kg`
);

const WEIGHT_GAIN = 0.2;
const DAYS_OF_THE_YEAR = 365

const gainWeight = (person) => (person.weight += WEIGHT_GAIN);
const slimDown = (person) => (person.weight -= WEIGHT_GAIN);

for (let i = 1; i <= DAYS_OF_THE_YEAR; i++) {
  const random = Math.random();

  if (random < 0.25) {
    gainWeight(sacha);
  } else if (random < 0.5) {
    slimDown(sacha);
  }
}

console.log(
  `At the end of the year ${sacha.name} weighs ${sacha.weight.toFixed(2)}kg`
);
