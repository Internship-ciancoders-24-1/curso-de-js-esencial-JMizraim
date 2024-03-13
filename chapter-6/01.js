class Person {
  constructor(name, lastName, height) {
    this.name = name;
    this.lastName = lastName;
    this.height = height;
  }

  speak() {
    const { name, lastName } = this;
    console.log(`Hi, my name is ${name} ${lastName}`);
  }

  isTall() {
    return this.height > 1.8;
  }
}

class Developer extends Person {
  constructor(name, lastName) {
    super(name, lastName);
  }

  speak(fn) {
    const { name, lastName } = this;
    if (fn) {
      fn(name, lastName, true);
    }
  }
}

const sacha = new Person("Sacha", "Lifszyc", 1.72);
const alan = new Developer("Alan", "Perez", 1.65);

function greet(name, lastName, isDev) {
  console.log(`Hi, my name is ${name} ${lastName}`);
  if (isDev) {
    console.log(`I'm a developer`);
  }
}
