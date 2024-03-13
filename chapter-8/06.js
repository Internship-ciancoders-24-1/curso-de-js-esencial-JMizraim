const sacha = {
  name: "Sacha",
  age: 28,
};

const inmutableSacha = (sacha) => ({
  ...sacha,
  age: sacha.age + 1,
});

console.log(sacha);
console.log(inmutableSacha(sacha));
