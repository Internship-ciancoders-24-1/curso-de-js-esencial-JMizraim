const sacha = {
  name: "Sacha",
  lastName: "Lifszyc",
  age: 28,
  weight: 75,
};

console.log(
  `At the beginning of the year ${sacha.name} weighs ${sacha.weight}kg`
);

const WEIGHT_GAIN = 0.3;
const DAYS_OF_THE_YEAR = 365;

const gainWeight = (person) => (person.weight += WEIGHT_GAIN);
const slimDown = (person) => (person.weight -= WEIGHT_GAIN);
const eatALot = () => Math.random() < 0.3;
const doSport = () => Math.random() < 0.4;

const GOAL = sacha.weight - 3;
let daysPassed = 0;

while (sacha.weight > GOAL) {
  if (eatALot()) {
    gainWeight(sacha);
  }
  if (doSport()) {
    slimDown(sacha);
  }
  daysPassed++;
}

console.log(`It took ${daysPassed} days for ${sacha.name} to lose 3kg`);
console.log(
  `At the end of the year ${sacha.name} weighs ${sacha.weight.toFixed(2)}kg`
);