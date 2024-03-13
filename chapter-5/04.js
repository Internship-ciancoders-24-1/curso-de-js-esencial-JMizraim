function inheritFrom(prototypeChild, prototypeParent) {
  const fn = function () {};
  fn.prototype = prototypeParent.prototype;
  prototypeChild.prototype = new fn();
  prototypeChild.prototype.constructor = prototypeChild;
}

function Person(name, lastName, height) {
  this.name = name;
  this.lastName = lastName;
  this.height = height;
}

Person.prototype.speak = function () {
  console.log(`Hi, my name is ${this.name} ${this.lastName}`);
};

Person.prototype.isTall = function () {
  return this.height > 1.8;
};

function Developer(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

inheritFrom(Developer, Person);

Developer.prototype.speak = function () {
  console.log(
    `Hi, my name is ${this.name} ${this.lastName} and I'm a developer`
  );
};


const sacha = new Person("Sacha", "Lifszyc", 1.72);
const alan = new Developer("Alan", "Perez", 1.65);
