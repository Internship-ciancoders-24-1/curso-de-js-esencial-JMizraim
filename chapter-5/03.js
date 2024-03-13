function Person(name, lastName, height){
    this.name = name;
    this.lastName = lastName;
    this.height = height;
}

Person.prototype.speak = function () {
    console.log(`Hi, my name is ${this.name} ${this.lastName}`);
}

Person.prototype.isTall = function () {
    return this.height > 1.8;
}

const sacha = new Person("Sacha", "Lifszyc", 1.72);
const alan = new Person("Alan", "Perez", 1.65);
const martin = new Person("Martin", "Gomez", 1.89);


martin.isTall()
// What will be the output?
// a) true
// b) false

// The answer is:
// a) true

// In this case, the function isTall is not an arrow function, so it will have its own this, which will be the object that calls it. In this case, martin, which has a height of 1.89, so it will return true.