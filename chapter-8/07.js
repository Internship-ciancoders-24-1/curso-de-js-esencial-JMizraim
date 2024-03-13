const sacha = {
  name: "Sacha",
  lastName: "Lifszyc",
};

const yesica = {
  name: "Yesica",
  lastName: "Cortés",
};

function greet(otherText = "") {
  console.log(`Hi, my name is ${this.name} ${this.lastName}. ${otherText}`);
}

// bind, call, apply

// bind returns a new function with the context changed
// const greetSacha = greet.bind(sacha);
// const greetYesica = greet.bind(yesica);

// setTimeout(greet.bind(sacha), 1000);

// call and apply are used to call a function with a specific context
greet.call(sacha, "What's up?");

// apply is similar to call, but it receives an array of arguments
greet.apply(sacha, ["What's up?"]);
