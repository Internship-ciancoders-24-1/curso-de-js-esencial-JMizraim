const sacha = {
  name: "Sacha",
  lastName: "Lifszyc",
  height: 1.72,
  books: 90,
};

const alan = {
  name: "Alan",
  lastName: "Perez",
  height: 1.86,
  books: 132,
};

const martin = {
  name: "Martin",
  lastName: "Gomez",
  height: 1.85,
  books: 105,
};

const dario = {
  name: "Dario",
  lastName: "Juarez",
  height: 1.71,
  books: 201,
};

const vicky = {
  name: "Vicky",
  lastName: "Zapata",
  height: 1.56,
  books: 150,
};

const paula = {
  name: "Paula",
  lastName: "Barros",
  height: 1.76,
  books: 200,
};

const people = [sacha, alan, martin, dario, vicky, paula];

const isTall = ({ height }) => height > 1.8;

const tallPeople = people.filter(isTall);

const convertToCms = (person) => ({
  ...person,
  height: person.height * 100,
});

const peopleCms = people.map(convertToCms);

const reducer = (accumulator, { books }) => accumulator + books;

const totalBooks = people.reduce(reducer, 0);

console.log(totalBooks);
