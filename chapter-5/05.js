class Person {
  constructor(name, lastName, height) {
    this.name = name;
    this.lastName = lastName;
    this.height = height;
  }

  speak() {
    console.log(`Hi, my name is ${this.name} ${this.lastName}`);
  }

  isTall() {
    return this.height > 1.8;
  }
}

class Developer extends Person {
  constructor(name, lastName) {
    super(name, lastName);
  }

  speak() {
    console.log(
      `Hi, my name is ${this.name} ${this.lastName} and I'm a developer`
    );
  }
}

const sacha = new Person("Sacha", "Lifszyc", 1.72);
const alan = new Developer("Alan", "Perez", 1.65);
