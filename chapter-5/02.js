function Person(name, lastName, height){
    this.name = name;
    this.lastName = lastName;
    this.height = height;
}

Person.prototype.speak = () => console.log(`Hi, my name is ${this.name} ${this.lastName}`);

Person.prototype.isTall = () => this.height > 1.8;

const sacha = new Person("Sacha", "Lifszyc", 1.72);
const alan = new Person("Alan", "Perez", 1.65);
const martin = new Person("Martin", "Gomez", 1.89);


martin.isTall()
// What will be the output?
// a) true
// b) false

// The answer is:
// b) false

// The arrow function does not have its own this, so it will use the this of the parent scope, which is the global scope. In this case, the global scope does not have a height property, so it will return undefined.