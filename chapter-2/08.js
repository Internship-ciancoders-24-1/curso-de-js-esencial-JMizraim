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
  
  function printNameInUpperCase(person) {
    const { name } = person;
    console.log(name.toUpperCase());
  }
  
  printNameInUpperCase(sacha); // SACHA
  
  function birthday(person) {
    return {
      ...person,
      age: person.age + 1,
    };
  }